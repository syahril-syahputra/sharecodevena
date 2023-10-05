import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Quality() {
    return (
        <div className="  container py-8">
            <div className="items-center md:flex">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 space-y-8 py-8 pr-4 text-gray-700 dark:text-white"
                >
                    <div className="relative overflow-visible  px-4 pt-4">
                        <Image
                            src="/images/quality.jpg"
                            width={100}
                            height={100}
                            sizes="responsive"
                            alt="asd"
                            className="z-10  mx-auto w-full flex-1 rounded-lg"
                        />
                        <div className="absolute -bottom-5 -left-0 right-10 top-10 -z-10 rounded-lg bg-cyan-600"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 space-y-8 py-8 pr-4 text-gray-700 dark:text-white"
                >
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
                </motion.div>
            </div>
        </div>
    );
}
