import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import React from 'react';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}
export default function SearchProduct(props: IProps) {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onClick();
        }
    };
    return (
        <div className="">
            <div className="flex items-center rounded-lg border border-gray-300 bg-white pl-2 dark:border-none dark:bg-slate-900">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-500 dark:text-white"
                />
                <input
                    type="search"
                    id="default-search"
                    onKeyDown={handleKeyDown} // Tambahkan event handler untuk keydown
                    value={props.value}
                    onChange={(v) => {
                        props.onChange(v.target.value);
                    }}
                    className="w-24 flex-1 border-none border-transparent bg-transparent text-gray-600 focus:border-transparent focus:ring-0 dark:text-white"
                    placeholder="Search for your parts through our 5,000,000 database"
                    required
                />

                <Button onClick={props.onClick}>Search</Button>
            </div>
        </div>
    );
}
