import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchProduct from '@/components/SearchProduct/SearchProduct';
import HotProduct from '@/components/SearchProduct/HotProduct';
import { useRouter } from 'next/navigation';

function HomePageBanner() {
    const [search, setsearch] = useState('');

    const router = useRouter();
    return (
        <div className="relative flex h-auto min-h-full w-full items-center  bg-slate-200 pb-24 pt-24 dark:bg-slate-800 ">
            <div className="container  space-y-10 text-center ">
                <motion.div
                    initial={{ opacity: 0, marginBottom: '300px' }}
                    whileInView={{ opacity: 1, marginBottom: '40px' }}
                    transition={{ duration: 1 }}
                    className=" block flex-wrap font-semibold md:text-xl"
                >
                    <h1 className="pb-2 text-[40px] font-bold">Venatronics</h1>
                    Your preferred supplier for global sourcing
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-3xl bg-slate-600 bg-opacity-25 p-2 "
                >
                    <SearchProduct
                        value={search}
                        onChange={setsearch}
                        onClick={() =>
                            search && router.push('/product/search?q=' + search)
                        }
                    />
                    <HotProduct />
                </motion.div>
            </div>
        </div>
    );
}

export default HomePageBanner;
