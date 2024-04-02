import { notFound } from 'next/navigation';
import React from 'react';
import fetchServer from '@/utils/fetchServer';
import ClientPage from './client';
import { getCurrentUser } from '@/utils/session';
async function getData(slug: string) {
    try {
        const res = await fetchServer({ url: '/products/' + slug });
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}
async function getCountry() {
    try {
        const res = await fetchServer({ url: '/region/countries' });
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const user = await getCurrentUser();

    const res = await getData(params.slug);
    const country = await getCountry();
    return (
        <div className="container py-20">
            <ClientPage country={country} user={user} product={res} />
        </div>
    );
}
