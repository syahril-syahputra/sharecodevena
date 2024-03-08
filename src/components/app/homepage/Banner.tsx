import React from 'react';
import { motion } from 'framer-motion';
import SearchProduct from '@/components/SearchProduct/SearchProduct';
import HotProduct from '@/components/SearchProduct/HotProduct';

function HomePageBanner() {
    return (
        <div className="relative flex h-auto min-h-full w-full items-center ">
            <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  space-y-10 text-center text-white">
                <motion.span
                    initial={{ opacity: 0, marginBottom: '300px' }}
                    whileInView={{ opacity: 1, marginBottom: '40px' }}
                    transition={{ duration: 1 }}
                    className=" block flex-wrap text-[25px] font-bold md:text-[40px]"
                >
                    Your preferred supplier for global sourcing
                </motion.span>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-3xl bg-slate-600 bg-opacity-25 p-2 "
                >
                    <SearchProduct />
                    <HotProduct />
                </motion.div>
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
