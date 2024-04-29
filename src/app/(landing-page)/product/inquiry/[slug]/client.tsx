'use client';
import fetchClient from '@/utils/FetchClient';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Alert, Button, Select, TextInput, Textarea } from 'flowbite-react';
import type { User } from 'next-auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { IProduct } from '@/types/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    product: IProduct;
    user?: User;
    country: {
        id: number;
        name: string;
        phonecode: string;
        namecode: string;
    }[];
}
interface FormInputs {
    country: string;
    quantity: number;
    target_price?: string;
    phone?: string;
    message?: string;
}

type FormErrorKeys = keyof FormInputs;
export default function ClientPage(props: IProps) {
    const [errorResponse, seterrorResponse] = useState('');
    const [isSubmited, setisSubmited] = useState(false);

    const scheme = yup.object({
        country: yup.string().required().label('Country'),
        quantity: yup
            .number()
            .typeError('Quantity must be a valid number')
            .required()
            .label('Quantity'),
        // .max(props.product.available_quantity),
        target_price: yup
            .string()
            // .default(0)
            // .optional()
            // .typeError('Target Price must be a valid number')
            // .required()
            .label('Target Price'),
        phone: yup.string().label('Phone'),
        message: yup.string().label('Message'),
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

    async function onSubmit(data: FormInputs) {
        // handle submitting the form
        const dataRequest = {
            slug_product: props.product.slug_product,
            part_number: props.product.part_number,
            country: data.country,
            quantity: data.quantity,
            target_price: data.target_price ? data.target_price : 0,
            phone: data.phone,
            message: data.message,
        };
        seterrorResponse('');
        try {
            await fetchClient({
                method: 'POST',
                url: 'member/product/inquiry',
                body: dataRequest,
            });
            setisSubmited(true);
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
        <div className="container ">
            {isSubmited && (
                <div className="mx-auto my-8 max-w-xl space-y-8 rounded-lg border p-8 text-center">
                    <div className="text-lg font-bold">
                        Your inqiry has been successfully processed
                    </div>
                    <div>
                        We will immediately contact you via email for further
                        information
                    </div>
                </div>
            )}
            {!isSubmited && (
                <div className="mx-auto  space-y-4 rounded-xl border p-8 dark:border-slate-400">
                    <h1>Inquiry Product</h1>
                    <form
                        className="space-y-8"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <span className="labelForm">Name</span>
                                <TextInput
                                    placeholder=""
                                    type="text"
                                    readOnly
                                    value={
                                        props.user?.first_name +
                                        ' ' +
                                        props.user?.last_name
                                    }
                                />
                            </div>
                            <div>
                                <span className="labelForm">Company</span>
                                <TextInput
                                    placeholder=""
                                    type="text"
                                    readOnly
                                    value={props.user?.company_name}
                                />
                            </div>
                            <div>
                                <span className="labelForm">Country</span>
                                <Select
                                    id="countries"
                                    {...register('country')}
                                    helperText={
                                        <>
                                            {errors.country && (
                                                <a className="mt-2 text-sm text-red-500">
                                                    {errors.country.message}
                                                </a>
                                            )}
                                        </>
                                    }
                                >
                                    <option
                                        key={0}
                                        hidden
                                        selected
                                        value={''}
                                        disabled
                                    >
                                        Select Country
                                    </option>
                                    {props.country.map((item) => (
                                        <option key={item.id} value={item.name}>
                                            {item.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <span className="labelForm">Part Number</span>
                                <TextInput
                                    placeholder=""
                                    type="text"
                                    readOnly
                                    value={props.product.part_number}
                                />
                            </div>
                            <div>
                                <span className="labelForm">Quantity</span>
                                <TextInput
                                    placeholder="Insert Quantity"
                                    type="text"
                                    {...register('quantity')}
                                    helperText={
                                        <>
                                            {errors.quantity && (
                                                <a className="mt-2 text-sm text-red-500">
                                                    {errors.quantity.message}
                                                </a>
                                            )}
                                        </>
                                    }
                                />
                            </div>
                            <div>
                                <span className="labelForm">Target Price</span>
                                <TextInput
                                    placeholder="Insert Target Price"
                                    type="number"
                                    {...register('target_price')}
                                    helperText={
                                        <>
                                            {errors.target_price && (
                                                <a className="mt-2 text-sm text-red-500">
                                                    {
                                                        errors.target_price
                                                            .message
                                                    }
                                                </a>
                                            )}
                                        </>
                                    }
                                />
                            </div>
                            <div>
                                <span className="labelForm">Email</span>
                                <TextInput
                                    placeholder=""
                                    type="text"
                                    readOnly
                                    value={props.user?.email}
                                />
                            </div>
                            <div>
                                <span className="labelForm">Phone</span>
                                <TextInput
                                    placeholder="Insert Phone Number"
                                    type="text"
                                    {...register('phone')}
                                    helperText={
                                        <>
                                            {errors.phone && (
                                                <a className="mt-2 text-sm text-red-500">
                                                    {errors.phone.message}
                                                </a>
                                            )}
                                        </>
                                    }
                                />
                            </div>

                            <div className="md:col-span-2">
                                <span className="labelForm">Message</span>
                                <Textarea
                                    placeholder="Insert Message"
                                    {...register('message')}
                                    helperText={
                                        <>
                                            {errors.message && (
                                                <a className="mt-2 text-sm text-red-500">
                                                    {errors.message.message}
                                                </a>
                                            )}
                                        </>
                                    }
                                />
                            </div>
                        </div>

                        {errorResponse && (
                            <Alert color="failure">
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="mr-4"
                                />
                                <span className="font-medium">
                                    Submit Failed
                                </span>{' '}
                                {errorResponse}
                            </Alert>
                        )}

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                isProcessing={isSubmitting}
                            >
                                Submit Inquiry
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
