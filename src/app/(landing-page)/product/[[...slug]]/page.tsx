import { notFound } from 'next/navigation';
import React from 'react';
import fetchServer from '@/utils/fetchServer';
import { getCurrentUser } from '@/utils/session';
async function getData(slug: string) {
    try {
        const res = await fetchServer({ url: '/products/' + slug });
        console.log(res);
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
export default async function Page({ params }: { params: { slug: string } }) {
    const user = await getCurrentUser();
    const partId = params.slug[1];
    const res = await getData(partId);

    return (
        <div className="container pt-20">
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
    );
}
