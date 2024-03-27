'use client';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    email: string;
    password: string;
    rememberMe?: boolean;
}
export default function Page() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const [loginFail, setloginFail] = useState(false);
    const scheme = yup.object({
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().label('Password'),
    });
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        mode: 'onChange',
        resolver: yupResolver(scheme),
    });

    async function onsubmit(data: FormInputs) {
        setloginFail(false);
        // handle submitting the form
        try {
            const callbackUrl = searchParams.get('callbackUrl') || '/';
            const request = await signIn('credentials', {
                email: data.email,
                password: data.password,
                remember_me: data.rememberMe,
                callbackUrl: callbackUrl,
            });
            // console.log(request);
            // if (request) {
            //     router.push(request.url || '');
            // }
            if (request?.error) {
                setloginFail(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container  mt-8 pt-4">
            <div className="mx-auto max-w-xl">
                <form
                    className=" space-y-4 rounded-xl border p-8 dark:border-slate-400"
                    onSubmit={handleSubmit(onsubmit)}
                >
                    <h1>Login</h1>
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
                    <div className="text-right">
                        <Link
                            href={'/auth/forgot-password'}
                            className="text-sm"
                        >
                            Forgot Password ?
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" {...register('rememberMe')} />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    {loginFail && (
                        <Alert color="failure">
                            <FontAwesomeIcon
                                icon={faCircleExclamation}
                                className="mr-4"
                            />
                            <span className="font-medium">Wrong Account!</span>{' '}
                            Your Account Not Found
                        </Alert>
                    )}
                    <FormError error={error} />
                    <Button type="submit" isProcessing={isSubmitting}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
function FormError({ error }: { error: string | null }) {
    if (!error) return null;

    return (
        <Alert color="failure">
            <FontAwesomeIcon icon={faCircleExclamation} className="mr-4" />
            <span className="font-medium">Login Failed! </span> {error}
        </Alert>
    );
}
