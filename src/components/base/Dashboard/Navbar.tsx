import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import clsx from 'clsx';
import { ButtonTheme } from '../Navbar/ButtonTheme';
interface IProps {
    sidebar: boolean;
    onHideSidebar: (newState: boolean) => void;
}
export default function DashboardNavbar(props: IProps) {
    const [isShowMenuu, setisShowMenuu] = useState(false);
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-600 dark:border-slate-700 dark:bg-slate-900">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            onClick={() => props.onHideSidebar(!props.sidebar)}
                            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="h-6 w-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <a
                            href="https://flowbite.com"
                            className="ms-2 flex md:me-24"
                        >
                            <Image
                                src="/logo.png"
                                alt="Venatronics Logo"
                                width={72}
                                className="filter-dark-mode"
                                height={72}
                            />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <ButtonTheme />
                        <div className="ms-3 flex items-center">
                            <div>
                                <button
                                    type="button"
                                    className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded="false"
                                    onClick={() => setisShowMenuu(!isShowMenuu)}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="aspect-square rounded-full bg-gray-500 p-3 text-white"
                                    />
                                </button>
                            </div>
                            <div
                                className={clsx(
                                    !isShowMenuu && 'hidden',
                                    'absolute right-2 top-full z-50  list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
                                )}
                                id="dropdown-user"
                            >
                                <div className="px-4 py-3" role="none">
                                    <p
                                        className="text-sm text-gray-900 dark:text-white"
                                        role="none"
                                    >
                                        Neil Sims
                                    </p>
                                    <p
                                        className="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                                        role="none"
                                    >
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
