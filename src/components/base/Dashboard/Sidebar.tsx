import {
    faBoxes,
    faFunnelDollar,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

interface IProps {
    isShow: boolean;
}

export default function DashboardSidebar(props: IProps) {
    return (
        <>
            <aside
                id="logo-sidebar"
                className={clsx(
                    !props.isShow ? 'sm:translate-x-0' : 'translate-x-0',
                    'fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full  border-r border-slate-400 bg-slate-200 pt-20 transition-transform dark:border-slate-700 dark:bg-slate-800 '
                )}
                aria-label="Sidebar"
            >
                <div className="h-full overflow-y-auto bg-slate-200 px-3 pb-4 dark:bg-slate-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/dashboard"
                                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/member"
                                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <FontAwesomeIcon icon={faPeopleGroup} />
                                <span className="ms-3 flex-1 whitespace-nowrap">
                                    Member
                                </span>
                                <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    8
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <FontAwesomeIcon icon={faBoxes} />
                                <span className="ms-3 flex-1 whitespace-nowrap">
                                    Products
                                </span>
                                <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <FontAwesomeIcon icon={faFunnelDollar} />
                                <span className="ms-3 flex-1 whitespace-nowrap">
                                    Leads
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
