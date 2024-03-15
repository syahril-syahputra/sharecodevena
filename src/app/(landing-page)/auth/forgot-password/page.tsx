'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    email: string;
}
export default function Page() {
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
        </div>
    );
}
