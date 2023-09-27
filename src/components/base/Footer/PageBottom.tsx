import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Item(params: { title: string; url: string }) {
    return (
        <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faCaretRight} />
            <a href={params.url || '#'} className="hover:underline">
                {params.title}
            </a>
        </li>
    );
}

export default function PageBottom() {
    return (
        <ul className="flex-1 space-y-6 font-medium text-gray-500 dark:text-gray-400">
            <Item url="#" title="Terms & Conditions" />
            <Item url="#" title="Cookie Policy" />
            <Item url="#" title="Privacy Policy" />
            <Item url="#" title="Contact" />
        </ul>
    );
}
