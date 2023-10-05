import {
    IconDefinition,
    faClipboardList,
    faHouseChimneyCrack,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ServiceBox = (props: {
    title: string;
    desc: string;
    icon: IconDefinition;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" rounded-lg bg-white bg-gradient-to-b from-white to-slate-100 px-4 py-2 dark:bg-cyan-800 dark:from-cyan-600 dark:to-cyan-700  "
        >
            <div className="mb-4 mt-4 flex flex-1 items-center space-x-4 ">
                <div className="aspect-square  rounded-full bg-cyan-600 p-4 dark:bg-white">
                    <FontAwesomeIcon
                        icon={props.icon}
                        fontSize={36}
                        className="aspect-square text-white dark:text-cyan-600"
                    />
                </div>
                <div className=" flex-1 space-y-2">
                    <span className=" text-lg font-bold text-cyan-600 dark:text-white">
                        {props.title}
                    </span>
                    <div className="line-clamp-2">{props.desc}</div>
                </div>
            </div>
        </motion.div>
    );
};
export default function Services() {
    return (
        <div className="relative overflow-hidden bg-slate-300 py-8 dark:bg-slate-700">
            <div className="container items-center space-y-4 md:flex md:space-x-28 md:space-y-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="flex-1"
                >
                    <div className="text-xxl font-bold text-gray-700 dark:text-white">
                        Our services
                    </div>
                    <span className="text-lg text-gray-700 dark:text-white">
                        We are here to understand your needs and provide
                        customised solutions for effective, on-time procurement.
                    </span>
                    <Link href={'/services'}>
                        <Button className="mt-8 font-bold">Read more</Button>
                    </Link>
                </motion.div>
                <div className="flex-1 space-y-4">
                    <ServiceBox
                        icon={faClipboardList}
                        title="Obsolete Component Management"
                        desc="Explore the world of electronic components where obsolescence isn't an obstacle; it's an opportunity. When an electronic component becomes obsolete—no longer in production by the original manufacturer (OCM)—it paves the way for innovation and adaptability."
                    />
                    <ServiceBox
                        icon={faHouseChimneyCrack}
                        title="Excess Stock Management"
                        desc="Venatronics takes pride in actively assisting our clients to effectively manage their excess inventory. When you collaborate with us by sharing your surplus stock"
                    />
                </div>
            </div>
        </div>
    );
}
