import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

export default function Quality() {
    return (
        <div className="  container py-8">
            <div className="items-center md:flex">
                <div className="flex-1 space-y-8 py-8 pr-4 text-gray-700 dark:text-white">
                    <div className="relative overflow-visible  px-4 pt-4">
                        <Image
                            src="/images/quality.jpg"
                            width={0}
                            height={0}
                            sizes="90vw"
                            alt="asd"
                            className="z-10  mx-auto w-full flex-1 rounded-lg"
                        />
                        <div className="absolute -bottom-5 -left-0 right-10 top-10 -z-10 rounded-lg bg-cyan-600"></div>
                    </div>
                </div>

                <div className="flex-1 space-y-8 py-8 pr-4 text-gray-700 dark:text-white">
                    <Image
                        src="/images/quality2.png"
                        width={0}
                        height={0}
                        sizes="90vw"
                        alt="asd"
                        className="dark:filter-dark-mode mx-auto w-full flex-1 rounded-md"
                    />
                    <div className="text-xxl font-bold">Quality Assurance</div>
                    <div className="line-clamp-6">
                        Venatronics enforces a mandatory quality control regimen
                        rooted in the AS9120:2016 and AS6081 standards, ensuring
                        the precision of components prior to their delivery to
                        our esteemed clientele.
                    </div>
                    <Button className="px-20">Learn more</Button>
                </div>
            </div>
        </div>
    );
}
