'use client';
import { Button, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormInputs {
    name: string;
    company: string;
    country: string;
    partNumber: string;
    quantity: number;
    email: string;
    phone: string;
    message: string;
}
export default function Page() {
    const scheme = yup.object({
        name: yup.string().required().label('Name'),
        company: yup.string().required().label('Company'),
        country: yup.string().required().label('Country'),
        partNumber: yup.string().required().label('Part Number'),
        quantity: yup
            .number()
            .required()
            .typeError('Quantity must be a number')
            .min(1)
            .label('Quantity'),
        email: yup.string().required().email().label('Email'),
        phone: yup
            .string()
            .matches(
                /^\+\d{10,15}$/,
                'Phone number must be in format +[country code][phone number], e.g. +88612345789'
            )
            .required()
            .label('Phone number'),
        message: yup.string().required().label('Message'),
    });
    function woosalSubmit(data: FormInputs) {
        // handle submitting the form
        console.log(data);
    }
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        mode: 'onChange',
        resolver: yupResolver(scheme),
    });
    return (
        <div className="container py-8">
            <div className="mx-auto max-w-3xl p-4 shadow-lg ">
                <h1>RFQ</h1>
                <form
                    className=" space-y-4"
                    onSubmit={handleSubmit(woosalSubmit)}
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <span className="labelForm">Name</span>
                            <TextInput
                                {...register('name')}
                                helperText={
                                    <>
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Company</span>
                            <TextInput
                                {...register('company')}
                                helperText={
                                    <>
                                        {errors.company && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.company.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Country</span>
                            <TextInput
                                {...register('country')}
                                helperText={
                                    <>
                                        {errors.country && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.country.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <span className="labelForm">Part Number</span>
                            <TextInput
                                {...register('partNumber')}
                                helperText={
                                    <>
                                        {errors.partNumber && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.partNumber.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Quantity</span>

                            <TextInput
                                {...register('quantity')}
                                helperText={
                                    <>
                                        {errors.quantity && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.quantity.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <span className="labelForm">Email</span>
                            <TextInput
                                {...register('email')}
                                helperText={
                                    <>
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                        <div>
                            <span className="labelForm">Phone</span>

                            <TextInput
                                {...register('phone')}
                                helperText={
                                    <>
                                        {errors.phone && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <span className="labelForm">Message</span>
                        <Textarea
                            {...register('message')}
                            helperText={
                                <>
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </>
                            }
                            placeholder=""
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
