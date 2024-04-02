import { notFound } from 'next/navigation';
import React from 'react';
import fetchServer from '@/utils/fetchServer';

async function getData() {
    try {
        const res = await fetchServer({ url: '/user/me' });
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}
export default async function page() {
    const res = await getData();
    return <div>{JSON.stringify(res)}</div>;
}
