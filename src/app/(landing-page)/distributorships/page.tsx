import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageBorder = (props: { src: string; href: string }) => {
    return (
        <Link href={props.href}>
            <div className="rounded-lg   bg-white p-4">
                <Image
                    src={props.src}
                    width={0}
                    height={0}
                    alt={props.href}
                    sizes="100vw"
                    className=" m-auto h-[100px] w-auto"
                />
            </div>
        </Link>
    );
};
export default function page() {
    return (
        <div className="">
            <div className="relative flex h-auto w-full items-center bg-slate-700 ">
                <div className="container pb-12 pt-24">
                    <h1 className="text-[48px]">Distributors</h1>
                </div>
            </div>

            <div className="grid-col-1 container grid justify-around gap-4  py-8 md:grid-cols-5 ">
                <ImageBorder
                    src={'/images/distributorships/eyctech.png'}
                    href="https://www.eyc-tech.com/"
                />
                <ImageBorder
                    src={'/images/distributorships/pdc.png'}
                    href="http://www.pdc.com.tw/index-eng.htm"
                />
                <ImageBorder
                    src={'/images/distributorships/potens.png'}
                    href="https://www.potens-semi.com/"
                />
                <ImageBorder
                    src={'/images/distributorships/cherngweei.png'}
                    href="http://www.cwe.com.tw/index.php?Company_SN=19660"
                />
                <ImageBorder
                    src={'/images/distributorships/yll.png'}
                    href="http://www.yuliangled.com/"
                />
            </div>
        </div>
    );
}
