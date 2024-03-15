import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    // faFacebook,
    // faTwitter,
    // faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function CompanyBottom() {
    return (
        <div className="mb-6 flex-1 items-center space-y-4 md:mb-0">
            <a href="https://venatronics.com/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Venatronics Logo"
                    width={200}
                    className="dark:filter-dark-mode"
                    height={200}
                />
            </a>
            <div className="hidden font-bold">
                21921 Rimhurst Drive, Lake Forest,
                <br />
                California 92630, United States
            </div>
            <div className="mt-20">Follow us</div>
            <div className="space-x-6">
                {/* <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-[30px] text-[30px] text-gray-600 dark:text-white"
                /> */}
                <Link
                    href="https://www.linkedin.com/company/venatronics-llc/"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="h-[30px] text-[30px] text-gray-600 dark:text-white"
                    />
                </Link>
                {/* <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-[30px] text-[30px] text-gray-600 dark:text-white"
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="h-[30px] text-[30px] text-gray-600 dark:text-white"
                /> */}
            </div>
        </div>
    );
}
