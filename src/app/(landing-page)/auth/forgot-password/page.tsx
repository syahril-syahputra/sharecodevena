'use client';
import fetchClient from '@/utils/FetchClient';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    email: string;
}
export default function Page() {
    const [sended, setsended] = useState(false);
    const scheme = yup.object({
        email: yup.string().required().email().label('Email'),
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
        // handle submitting the form
        try {
            await fetchClient({
                url: '/auth/forgot-password',
                method: 'POST',
                body: { email: data.email },
            });
        } catch (error) {
            console.log(error);
        } finally {
            setsended(true);
        }
    }
    return (
        <div className="container  mt-8 pt-4">
            {!sended && (
                <div className="mx-auto max-w-xl">
                    <form
                        className=" space-y-4 rounded-xl border p-8 dark:border-slate-400"
                        onSubmit={handleSubmit(onsubmit)}
                    >
                        <h1>Forgot Password</h1>
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

                        <Button type="submit" isProcessing={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                </div>
            )}
            {sended && (
                <div className="mx-auto my-8 max-w-xl space-y-8 rounded-lg border p-8 text-center">
                    <div className="text-lg font-bold">
                        Your request has been successfully processed
                    </div>
                    <div>Please check your email to reset your password!</div>
                </div>
            )}
        </div>
    );
}
