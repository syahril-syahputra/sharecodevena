import React from 'react';

export default function page() {
    return (
        <div className="ml-4 flex h-24 border-2 border-gray-300 bg-gray-300 p-3 px-5 text-gray-700 shadow-md">
            page testing
            <div className="flex items-center space-x-4">
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://fastly.picsum.photos/id/430/200/300.jpg?hmac=souGSmvwQ6KlJgthGYBGSWB22Y7MpK5xlgLYwvtbXzg"
                    alt=""
                />
                <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Joined in August 2014
                    </div>
                </div>
            </div>
        </div>
    );
}
