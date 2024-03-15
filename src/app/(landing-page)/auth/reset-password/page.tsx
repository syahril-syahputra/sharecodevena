'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
    password: string;
    password_confirmation: string;
}
export default function Page() {
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
                        <span className="labelForm">Confirm New Password</span>
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

                    <Button type="submit" isProcessing={isSubmitting}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
