import { notFound } from 'next/navigation';
import React from 'react';
import { api } from '@/utils/axios';
async function getData(slug: string) {
    try {
        const res = await api.get('/products/' + slug);
        return res.data.data;
    } catch (error) {
        return notFound();
    }
}
function ItemList(props: { title: string; value: string }) {
    return (
        <div>
            <div className=" font-semibold">{props.title}</div>
            <h1 className="text-base font-normal">{props.value}</h1>
        </div>
    );
}
export default async function page({ params }: { params: { slug: string } }) {
    // try {
    //     const res = await getData();
    //     console.log(res);
    // } catch (error) {
    //     return notFound();
    // }
    // if (!params.slug) {
    //     return notFound();
    // }
    // const partNumber = params.slug[0];
    const partId = params.slug[1];
    const res = await getData(partId);

    return (
        <div className="container py-4">
            <div className="mx-auto grid w-full grid-cols-1 rounded-lg border  p-8 md:w-2/3 md:grid-cols-2">
                <ItemList title="Part Number" value={res.part_number} />
                <ItemList title="Description" value={res.description} />
                <ItemList title="Manufacturer" value={res.manufacturer} />
                <ItemList title="Date Code" value={res.date_code} />
                <ItemList
                    title="Available Quantity"
                    value={res.available_quantity}
                />
                <ItemList title="Packaging" value={res.packaging} />
            </div>
        </div>
    );
}
