'use client';
import fetchClient from '@/utils/FetchClient';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Alert, Button, Spinner, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    password: string;
    password_confirmation: string;
}
type FormErrorKeys = keyof FormInputs;
export default function Page() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [isValidating, setisValidating] = useState(true);
    const [isTokenValid, setisTokenValid] = useState(false);

    const key = searchParams.get('key');
    const confirmation_key = searchParams.get('confirmation_key');

    const [errorResponse, seterrorResponse] = useState('');

    const scheme = yup.object({
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

    useEffect(() => {
        async function fetchData() {
            try {
                await fetchClient({
                    url: '/auth/validate-reset-password-token',
                    method: 'POST',
                    body: {
                        token:
                            'key=' +
                            key +
                            '&confirmation_key=' +
                            confirmation_key,
                    },
                });
                setisTokenValid(true);
            } catch (error) {
                setisTokenValid(false);
                console.log(error);
            } finally {
                setisValidating(false);
            }
        }
        fetchData();
    }, []);

    async function onsubmit(data: FormInputs) {
        // handle submitting the form
        const dataRequest = {
            password: data.password,
            password_confirmation: data.password_confirmation,
            token: 'key=' + key + '&confirmation_key=' + confirmation_key,
        };
        seterrorResponse('');
        try {
            await fetchClient({
                method: 'POST',
                url: '/auth/reset-password',
                body: dataRequest,
            });
            router.push('/auth/login');
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
            {isValidating && (
                <div className="mx-auto my-8 max-w-xl space-y-8 rounded-lg border p-8 text-center">
                    <div className="text-lg font-bold">
                        Please Wait, verifying your token{' '}
                        {/* {`key=${key}&confirmation_key=${confirmation_key}`} */}
                    </div>
                    <div>
                        <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
                    </div>
                </div>
            )}
            {!isTokenValid && !isValidating && (
                <div className="mx-auto my-8 max-w-xl space-y-8 rounded-lg border p-8 text-center">
                    <div className="text-lg font-bold">
                        Your link not valid.
                    </div>
                    <div>
                        Please click{' '}
                        <Link href={'/auth/forgot-password'}>HERE</Link> resend
                        input your email again
                    </div>
                </div>
            )}
            {isTokenValid && !isValidating && (
                <div className="mx-auto max-w-xl">
                    <form
                        className=" space-y-4 rounded-xl border p-8 dark:border-slate-400"
                        onSubmit={handleSubmit(onsubmit)}
                    >
                        <h1>Set New Password</h1>
                        <div>
                            <span className="labelForm">New Password</span>
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
                            <span className="labelForm">
                                Confirm New Password
                            </span>
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
                        {errorResponse && (
                            <Alert color="failure">
                                <span className="font-medium">Failed</span>{' '}
                                {errorResponse}
                            </Alert>
                        )}
                        <Button type="submit" isProcessing={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
}
