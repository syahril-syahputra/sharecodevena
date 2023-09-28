import {
    faBuilding,
    faEnvelope,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export default function page() {
    return (
        <div className="container py-8 text-center">
            <a href="https://venatronics.com/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="FlowBite Logo"
                    width={200}
                    className="dark:filter-dark-mode mx-auto"
                    height={200}
                />
            </a>
            <div className=" mt-5 space-y-2 font-bold">
                <div>
                    <FontAwesomeIcon icon={faBuilding} />
                    {` `}
                    21921 Rimhurst Drive, Lake Forest, California 92630, United
                    States
                </div>
                <div>
                    <a href="mailto:info@venatronics.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        {` `}
                        info@venatronics.com
                    </a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    {` `}
                    +17149090029
                </div>
            </div>
        </div>
    );
}
