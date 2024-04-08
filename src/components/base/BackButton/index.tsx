'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            className="!cursor-pointer opacity-50 hover:opacity-100"
        >
            <FontAwesomeIcon icon={faArrowLeft} /> <a>Back</a>
        </button>
    );
}
