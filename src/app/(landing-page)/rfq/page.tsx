/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Alert, Button, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import fetchClient from '@/utils/FetchClient';
import { notFound } from 'next/navigation';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

interface FormInputs {
    part_number: string;
    country: string;
    quantity: number;
    target_price: number;
    phone: string;
    message: string;
}
export default function Page() {
    const [listCountry, setlistCountry] = useState([]);
    const [errorResponse, seterrorResponse] = useState('');
    const [isSubmited, setisSubmited] = useState(false);
    const scheme = yup.object({
        part_number: yup.string().required().label('Part Number'),
        country: yup.string().required().label('Country'),
        target_price: yup
            .number()
            .required()
            .typeError('Targer Price must be a number')
            .min(1)
            .label('Targer Price'),
        quantity: yup
            .number()
            .required()
            .typeError('Quantity must be a number')
            .min(1)
            .label('Quantity'),
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
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await fetchClient({ url: '/region/countries' });
                setlistCountry(res.data.data);
            } catch (error) {
                return notFound();
            }
        };
        fetch();
    }, []);

    async function woosalSubmit(data: FormInputs) {
        const dataRequest = {
            part_number: data.part_number,
            country: data.country,
            quantity: data.quantity,
            target_price: data.target_price,
            phone: data.phone,
            message: data.message,
        };
        setisSubmited(false);
        seterrorResponse('');
        try {
            await fetchClient({
                method: 'POST',
                url: 'member/product/inquiry',
                body: dataRequest,
            });
            setisSubmited(true);
            reset();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.errors) {
                    const obj = error.response?.data.errors;

                    for (const [key, value] of Object.entries(obj)) {
                        if (key in scheme.fields) {
                            setError(key as keyof FormInputs, {
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
    const {
        handleSubmit,
        register,
        setError,
        reset,
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
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <span className="labelForm">Part Number</span>
                            <TextInput
                                {...register('part_number')}
                                helperText={
                                    <>
                                        {errors.part_number && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.part_number.message}
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
                                {listCountry.map((item: any) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                        <div>
                            <span className="labelForm">Target Price</span>

                            <TextInput
                                {...register('target_price')}
                                helperText={
                                    <>
                                        {errors.target_price && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.target_price.message}
                                            </p>
                                        )}
                                    </>
                                }
                                placeholder=""
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
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
                    {errorResponse && (
                        <Alert color="failure">
                            <FontAwesomeIcon
                                icon={faCircleExclamation}
                                className="mr-4"
                            />
                            <span className="font-medium">Submit Failed</span>{' '}
                            {errorResponse}
                        </Alert>
                    )}
                    {isSubmited && (
                        <Alert color="success">
                            <FontAwesomeIcon icon={faCheck} className="mr-4" />
                            <span className="font-medium">
                                Your request has benn submit!
                            </span>
                        </Alert>
                    )}
                    <Button type="submit" isProcessing={isSubmitting}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
