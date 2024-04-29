import { notFound } from 'next/navigation';
import React from 'react';
import fetchServer from '@/utils/fetchServer';
import ClientPage from './client';
import { getCurrentUser } from '@/utils/session';
async function getCountry() {
    try {
        const res = await fetchServer({ url: '/region/countries' });
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}

export default async function Page() {
    const user = await getCurrentUser();

    const country = await getCountry();
    return (
        <div className="container py-20">
            <ClientPage country={country} user={user} />
        </div>
    );
}
