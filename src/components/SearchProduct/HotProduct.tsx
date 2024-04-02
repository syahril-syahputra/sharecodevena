import React, { useEffect, useState } from 'react';
import fetchClient from '@/utils/FetchClient';
import Link from 'next/link';
import { IProduct } from '@/types/product';

export default function HotProduct() {
    const [hot, sethot] = useState([]);
    const [hotLoading, sethotLoading] = useState(false);
    useEffect(() => {
        sethotLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetchClient({
                    url: '/product/hot?take=10',
                });
                sethot(response.data.data);
                sethotLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="flex  pt-4">
            {!hotLoading && (
                <>
                    <span className="font-bold text-teal-400">HOT</span>
                    <ul className="row-span-2 grid h-12 flex-1 grid-cols-2 gap-1 overflow-hidden text-sm  md:grid-cols-5">
                        {hot.map((item: IProduct, index) => (
                            <Link
                                href={
                                    '/product/' +
                                    item.part_number +
                                    '/' +
                                    item.slug_product
                                }
                                key={index}
                            >
                                <li className="line-clamp-1 hover:opacity-70">
                                    {item.part_number}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
