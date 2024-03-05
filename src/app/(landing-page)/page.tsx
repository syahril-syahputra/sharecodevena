'use client';
import HomePageBanner from '@/components/app/homepage/Banner';
import Information from '@/components/app/homepage/Information';
import Priority from '@/components/app/homepage/Priority';
import Quality from '@/components/app/homepage/Quality';
import Services from '@/components/app/homepage/Services';
import React from 'react';
// import { Alert, Dropdown } from 'flowbite-react';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function page() {
    return (
        <div>
            <HomePageBanner />
            <Information />
            <Priority />
            <Services />
            <Quality />
        </div>
    );
}
