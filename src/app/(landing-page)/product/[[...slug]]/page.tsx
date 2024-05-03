import { notFound } from 'next/navigation';
import React from 'react';
import fetchServer from '@/utils/fetchServer';
import { getCurrentUser } from '@/utils/session';
import ItemList from './ItemList';
import BackButton from '@/components/base/BackButton';
import type { Metadata } from 'next';
import { jsonLdProduct } from '@/components/seo/jsonld';

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const partId = params.slug[1];
    const res = await getData(partId);

    return {
        title: res.part_number,
        description: res.description,
    };
}

async function getData(slug: string) {
    try {
        const res = await fetchServer({ url: '/products/' + slug });
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const user = await getCurrentUser();
    const partId = params.slug[1];
    const res = await getData(partId);

    jsonLdProduct.name = res.part_number;
    jsonLdProduct.description = res.descripttion;
    jsonLdProduct.brand.name = res.manufacturer;
    jsonLdProduct.sku = res.part_number;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdProduct),
                }}
            />
            <div>
                <div className="container space-y-4 pt-20">
                    <div className="mx-auto md:w-2/3">
                        <BackButton />
                    </div>
                    <div className="mx-auto rounded-xl border border-gray-500 p-8  md:w-2/3">
                        <h1>{res.part_number}</h1>
                        <h2>{res.manufacturer}</h2>
                        <article>{res.description}</article>
                        <div className=" grid w-full grid-cols-1 py-8  md:grid-cols-2">
                            <ItemList title="Packaging" value={res.packaging} />
                            <ItemList
                                hideValue={!user}
                                title="Date Code"
                                value={res.date_code}
                            />
                            <ItemList
                                hideValue={!user}
                                title="Available Quantity"
                                value={res.available_quantity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
