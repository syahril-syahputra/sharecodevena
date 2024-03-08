import { notFound } from 'next/navigation';
import React from 'react';
import { api } from '@/utils/axios';
async function getData() {
    try {
        const res = await api.get(
            '/products?page=3&paginate=10&sort_by=part_number&sort_type=desc&keyword=SOD-123Flat'
        );
        return res.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
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
    try {
        const res = await getData();
        console.log(res);
        return <div>Stargazers : {}</div>;
    } catch (error) {
        return notFound();
    }
    if (!params.slug) {
        return notFound();
    }
    // const partNumber = params.slug[0];
    // const partId = params.slug[1];

    return (
        <div className="container py-4">
            <div className="mx-auto grid w-full grid-cols-1 rounded-lg border  p-8 md:w-2/3 md:grid-cols-2">
                <ItemList title="Part Number" value="testing" />
                <ItemList title="Description" value="testing" />
                <ItemList title="Manufacturer" value="testing" />
                <ItemList title="Date Code" value="testing" />
                <ItemList title="Available Quantity" value="testing" />
                <ItemList title="Packaging" value="testing" />
            </div>
        </div>
    );
}
