import React from 'react';
import NewsLetter from './NewsLetter';
import PageBottom from './PageBottom';
import CompanyBottom from './CompanyBottom';

export default function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-gray-900">
            <div className=" container py-8">
                <div className="items-center space-y-8 md:flex md:justify-between">
                    <CompanyBottom />
                    <PageBottom />
                    <NewsLetter />
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                        © 2023{' '}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Venatronics
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
