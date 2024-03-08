'use client';
import SearchProduct from '@/components/SearchProduct/SearchProduct';
import SkeletonTable from '@/components/Skeleton/SkeletonTable';
import { api } from '@/utils/axios';
import { Pagination, Table } from 'flowbite-react';
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
export default function Page({ searchParams }: PageProps) {
    const [text, settext] = useState(searchParams.q || '');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearching, setisSearching] = useState(false);
    const [totalPage, settotalPage] = useState(0);
    const [data, setdata] = useState([]);

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
            const res = await api.get(
                `/products?page=${currentPage}&paginate=10&sort_by=part_number&sort_type=desc&keyword=${text}`
            );
            setdata(res.data.data.items);
            settotalPage(res.data.data.meta.total_page);
            console.log(res.data.data.items);
        } catch (error) {
            console.log(error);
        } finally {
            setisSearching(false);
        }
    }

    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="container space-y-8 py-8">
            <h1 className="text-lg font-semibold">Search Product</h1>
            <div>
                <SearchProduct
                    value={text}
                    onChange={settext}
                    onClick={fetchData}
                />
            </div>
            {isSearching && <SkeletonTable row={5} />}
            {!isSearching && (
                <>
                    {' '}
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
                                        <Table.Cell className="text-right">
                                            {item.available_quantity}
                                        </Table.Cell>
                                        <Table.Cell className="space-x-4">
                                            <Link
                                                href={`/product/${item.slug_part_number}/${item.slug_product}`}
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Detail
                                            </Link>
                                            <a
                                                href="#"
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Inquiry
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                            {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Apple MacBook Pro 17"'}
                                </Table.Cell>
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>
                                    <a
                                        href="#"
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </Table.Cell>
                                <Table.Cell>White</Table.Cell>
                                <Table.Cell>Laptop PC</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                                <Table.Cell>
                                    <a
                                        href="#"
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>Black</Table.Cell>
                                <Table.Cell>Accessories</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                                <Table.Cell className="space-x-4">
                                    <a
                                        href="#"
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Detail
                                    </a>
                                    <a
                                        href="#"
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Inquiry
                                    </a>
                                </Table.Cell>
                            </Table.Row> */}
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
