import {
    faBook,
    faBuilding,
    faClockFour,
    faPersonCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const ItemComponent = (props: {
    title: string;
    desc: string;
    icon: ReactNode;
}) => {
    return (
        <div className="w-full border-b-2 border-gray-400 last:border-b-0 last:border-r-0 md:border-b-0 md:border-r-2">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-1 cursor-pointer items-center space-x-4  px-4 py-8 font-bold text-teal-500  dark:text-teal-400 dark:hover:bg-slate-600  "
            >
                {props.icon}
                <div>
                    <div className="text-xl ">{props.title}</div>
                    <label className="text-sm text-slate-700 dark:text-white">
                        {props.desc}
                    </label>
                </div>
            </motion.div>
        </div>
    );
};
export default function Information() {
    return (
        <section className="bg-slate-300 dark:bg-slate-700">
            <div className="container flex flex-col justify-between md:flex-row">
                <ItemComponent
                    title="50+"
                    desc="International Customers"
                    icon={
                        <FontAwesomeIcon
                            icon={faPersonCircleCheck}
                            className="aspect-square text-[42px]"
                        />
                    }
                />
                <ItemComponent
                    title="2"
                    desc="Quality Control Center"
                    icon={
                        <FontAwesomeIcon
                            icon={faBuilding}
                            className="aspect-square text-[42px]"
                        />
                    }
                />
                <ItemComponent
                    title="1.256.875"
                    desc="Parts in Stock"
                    icon={
                        <FontAwesomeIcon
                            icon={faBook}
                            className="aspect-square text-[48px]"
                        />
                    }
                />
                <ItemComponent
                    title="24 Hours"
                    desc="Quotation within 24 Hours"
                    icon={
                        <FontAwesomeIcon
                            icon={faClockFour}
                            className="aspect-square text-[42px]"
                        />
                    }
                />
            </div>
        </section>
    );
}
