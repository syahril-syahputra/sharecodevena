'use client';
import SearchProduct from '@/components/SearchProduct/SearchProduct';
import SkeletonTable from '@/components/Skeleton/SkeletonTable';
import fetchClient from '@/utils/FetchClient';
import { Button, Pagination, Table } from 'flowbite-react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
interface PageProps {
    searchParams: { [key: string]: string };
}
type InventoryItem = {
    slug_product: string;
    slug_part_number: string;
    part_number: string;
    manufacturer: string;
    description: string;
    available_quantity: number;
};
type SuggestionItemTYpe = {
    part_number: string;
    slug_product: string;
    slug_part_number: string;
};
export default function Page({ searchParams }: PageProps) {
    const [text, settext] = useState(searchParams.q || '');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearching, setisSearching] = useState(false);
    const [totalPage, settotalPage] = useState(0);
    const [data, setdata] = useState([]);
    const [suggestion, setsuggestion] = useState([]);
    const { status } = useSession();

    useEffect(() => {
        fetchData();
    }, [currentPage]);
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const checkTextChange = () => {
            timeoutId = setTimeout(() => {
                fetchData();
            }, 500);
        };
        checkTextChange();
        return () => clearTimeout(timeoutId);
    }, [text]);

    async function fetchData() {
        try {
            setisSearching(true);
            // const res = await api.get(
            //     `/products?page=${currentPage}&paginate=10&sort_by=part_number&sort_type=desc&keyword=${text}`
            // );
            const res = await fetchClient({
                url: `/products?page=${currentPage}&paginate=10&sort_by=part_number&sort_type=desc&keyword=${text}`,
            });
            setdata(res.data.data.items);
            settotalPage(res.data.data.meta.total_page);

            const suggest = await fetchClient({
                url: `/product/suggestion?keyword=${text}&take=5`,
            });
            setsuggestion(suggest.data.data);

            // console.log(res.data.data.items);
        } catch (error) {
            setdata([]);
            settotalPage(1);
            setsuggestion([]);
        } finally {
            setisSearching(false);
        }
    }

    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="container space-y-8 pb-4 pt-24">
            <h1 className="text-lg font-semibold">Search Product</h1>
            <div>
                <SearchProduct
                    value={text}
                    onChange={settext}
                    onClick={fetchData}
                />{' '}
                {suggestion.length > 0 && !isSearching && (
                    <div className="flex space-x-4 py-4">
                        <span className="font-bold">Suggestion</span>
                        <ul className="flex space-x-4 text-sm font-semibold underline">
                            {suggestion.map((item: SuggestionItemTYpe) => (
                                <Link
                                    key={item.part_number}
                                    href={
                                        '/product/' +
                                        item.slug_part_number +
                                        '/' +
                                        item.slug_product
                                    }
                                >
                                    <li>{item.part_number}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {isSearching && <SkeletonTable row={5} />}
            {!isSearching && (
                <>
                    <Table hoverable striped className="border">
                        <Table.Head>
                            <Table.HeadCell>Part Number</Table.HeadCell>
                            <Table.HeadCell>Manufacturer</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell className="text-right">
                                Available Quantity
                            </Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {data.length === 0 && (
                                <Table.Row
                                    key={0}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell
                                        colSpan={6}
                                        className="text-center text-red-500"
                                    >
                                        Data Not Found
                                    </Table.Cell>
                                </Table.Row>
                            )}
                            {data.map((item: InventoryItem, index) => {
                                return (
                                    <Table.Row
                                        key={index}
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {item.part_number}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.manufacturer}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.description}
                                        </Table.Cell>
                                        <Table.Cell className="items-end text-right">
                                            {status === 'authenticated' ? (
                                                item.available_quantity
                                            ) : (
                                                <Button
                                                    onClick={() => signIn()}
                                                    className="float-right"
                                                >
                                                    Show
                                                </Button>
                                            )}
                                        </Table.Cell>
                                        <Table.Cell className="space-x-4">
                                            <Link
                                                href={`/product/${item.slug_part_number}/${item.slug_product}`}
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Detail
                                            </Link>
                                            <Link
                                                href={`/product/inquiry/${item.slug_product}`}
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Inquiry
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                    <div className="flex overflow-x-auto sm:justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPage}
                            onPageChange={onPageChange}
                            showIcons
                        />
                    </div>
                </>
            )}
        </div>
    );
}
