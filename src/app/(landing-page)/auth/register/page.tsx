'use client';
import fetchClient from '@/utils/FetchClient';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Alert, Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    first_name: string;
    last_name: string;
    company_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    subscribe_newsletter?: boolean;
}

type FormErrorKeys = keyof FormInputs;
export default function Page() {
    const [errorResponse, seterrorResponse] = useState('');

    const scheme = yup.object({
        first_name: yup.string().required().label('Password'),
        last_name: yup.string().required().label('Password'),
        company_name: yup.string().required().label('Password'),
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().label('Password'),
        password_confirmation: yup
            .string()
            .oneOf(
                [yup.ref('password')],
                'Password and Confirm Password did not match'
            )
            .required()
            .label('Confirm Password'),
    });
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        mode: 'onChange',
        resolver: yupResolver(scheme),
    });

    async function onsubmit(data: FormInputs) {
        // handle submitting the form
        const dataRequest = {
            first_name: data.first_name,
            last_name: data.last_name,
            company_name: data.company_name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            subscribe_newsletter: data.subscribe_newsletter,
        };
        seterrorResponse('');
        try {
            await fetchClient({
                method: 'POST',
                url: '/auth/register',
                body: dataRequest,
            });

            await signIn('credentials', {
                email: data.email,
                password: data.password,
                remember_me: false,
                callbackUrl: '/',
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.errors) {
                    const obj = error.response?.data.errors;

                    for (const [key, value] of Object.entries(obj)) {
                        if (key in scheme.fields) {
                            setError(key as FormErrorKeys, {
                                type: 'custom',
                                message: value as string,
                            });
                        }
                    }
                }
                seterrorResponse(error.response?.data.message);
            }
        }
    }
    return (
        <div className="container  mt-8 pt-4">
            <div className="mx-auto  space-y-4 rounded-xl border p-8 dark:border-slate-400">
                <h1>Register</h1>
                <form className="space-y-8" onSubmit={handleSubmit(onsubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <span className="labelForm">First Name</span>
                            <TextInput
                                {...register('first_name')}
                                helperText={
                                    <>
                                        {errors.first_name && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {errors.first_name.message}
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Last Name</span>
                            <TextInput
                                {...register('last_name')}
                                helperText={
                                    <>
                                        {errors.last_name && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {errors.last_name.message}
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Company Name</span>
                            <TextInput
                                {...register('company_name')}
                                helperText={
                                    <>
                                        {errors.company_name && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {errors.company_name.message}
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Email</span>
                            <TextInput
                                {...register('email')}
                                helperText={
                                    <>
                                        {errors.email && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {errors.email.message}
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Password</span>
                            <TextInput
                                {...register('password')}
                                helperText={
                                    <>
                                        {errors.password && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {errors.password.message}
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="password"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Confirm Password</span>
                            <TextInput
                                {...register('password_confirmation')}
                                helperText={
                                    <>
                                        {errors.password_confirmation && (
                                            <a className="mt-2 text-sm text-red-500">
                                                {
                                                    errors.password_confirmation
                                                        .message
                                                }
                                            </a>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="subscribe"
                            {...register('subscribe_newsletter')}
                        />
                        <Label htmlFor="subscribe">
                            Inform me about product updates, new arrivals
                        </Label>
                    </div>
                    {errorResponse && (
                        <Alert color="failure">
                            <FontAwesomeIcon
                                icon={faCircleExclamation}
                                className="mr-4"
                            />
                            <span className="font-medium">Register Failed</span>{' '}
                            {errorResponse}
                        </Alert>
                    )}

                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-sm ">
                            By registering to Venatronics, you agree to the{' '}
                            <Link
                                href={'/privacy-policy'}
                                className="font-bold"
                                target="_blank"
                            >
                                Privacy and Policy
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            isProcessing={isSubmitting}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
