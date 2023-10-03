import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import React from 'react';

const SearchProduct = () => {
    return (
        <form className="">
            <div className="flex items-center rounded-lg bg-white  pl-2 dark:bg-slate-900">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-500 dark:text-white"
                />
                <input
                    type="search"
                    id="default-search"
                    className="w-24 flex-1 border-none border-transparent bg-transparent text-gray-600 focus:border-transparent focus:ring-0 dark:text-white"
                    placeholder="Search for your parts through our 5,000,000 database"
                    required
                />

                <Button type="submit">Search</Button>
            </div>
        </form>
    );
};
const Hot = () => {
    return (
        <div className="flex  pt-4">
            <span className="font-bold text-teal-400">HOT</span>
            <ul className="row-span-2 grid h-12 flex-1 grid-cols-2 gap-1 overflow-hidden text-sm text-gray-200 md:grid-cols-5">
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
                <li>VNH5180ATR-E</li>
            </ul>
        </div>
    );
};

function HomePageBanner() {
    return (
        <div className="relative flex h-auto min-h-full w-full items-center ">
            <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  space-y-10 text-center text-white">
                <span className="mb-8 flex-wrap text-[25px] font-bold md:text-[40px]">
                    Your preferred supplier for global sourcing
                </span>
                <div className="mx-auto max-w-3xl bg-slate-600 bg-opacity-25 p-2 ">
                    <SearchProduct />
                    <Hot />
                </div>
            </div>
            <div className="h-[500px] w-full overflow-scroll md:h-full">
                <video
                    loop
                    src="/videos/banner.mp4"
                    className=" h-full w-full object-cover "
                    autoPlay
                    muted
                ></video>
            </div>
        </div>
    );
}

export default HomePageBanner;
