'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    email: string;
    password: string;
    rememberMe?: boolean;
}
export default function Page() {
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

    function onsubmit(data: FormInputs) {
        // handle submitting the form
        console.log(data);
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

                    <Button type="submit" isProcessing={isSubmitting}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
