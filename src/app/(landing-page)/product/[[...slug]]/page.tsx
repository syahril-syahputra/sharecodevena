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
function ItemList(props: {
    title: string;
    value: string;
    hideValue?: boolean;
}) {
    return (
        <div>
            <div className=" pb-4 font-semibold">{props.title}</div>
            {props.hideValue ? (
                <button
                    className=" rounded-md bg-cyan-800 px-4 py-1 text-gray-400 "
                    disabled
                >
                    Show
                </button>
            ) : (
                <h1 className="text-base font-normal">{props.value}</h1>
            )}
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
            <div className="mx-auto rounded-xl border border-gray-500 p-8  md:w-2/3">
                <h1>{res.part_number}</h1>
                <h2>{res.manufacturer}</h2>
                <article>{res.description}</article>
                <div className=" grid w-full grid-cols-1 py-8  md:grid-cols-2">
                    <ItemList title="Packaging" value={res.packaging} />
                    <ItemList
                        hideValue
                        title="Date Code"
                        value={res.date_code}
                    />
                    <ItemList
                        hideValue
                        title="Available Quantity"
                        value={res.available_quantity}
                    />
                </div>
            </div>
        </div>
    );
}
