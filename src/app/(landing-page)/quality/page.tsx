import Image from 'next/image';
import React from 'react';

export default function page() {
    return (
        <div>
            <div className="relative flex h-auto w-full items-center bg-slate-300 dark:bg-slate-700 ">
                <div className="container pb-12 pt-24">
                    <h1 className="text-[48px]">Quality</h1>
                </div>
            </div>
            <div className="container py-8">
                <div className="relative float-left mb-8 mr-4  w-1/4 overflow-visible px-3 pt-4">
                    <Image
                        src="/images/quality.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Quality"
                        className="z-10  mx-auto w-full flex-1 rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-0 right-8 top-8 -z-10 rounded-lg bg-cyan-600"></div>
                </div>
                Venatronics enforces a mandatory quality control regimen rooted
                in the AS9120:2016 and AS6081 standards, ensuring the precision
                of components prior to their delivery to our esteemed clientele.
                <p />
                <br />
                In a dedicated pursuit of unyielding quality, Venatronics
                undertakes rigorous testing and authentication of electronic
                components within the distinguished White Horse testing
                laboratory. Additionally, we provide our customers with a
                function-fit-form warranty, reinforcing the confidence in our
                offerings.
                <p />
                <br />
                This comprehensive evaluation process encompasses a spectrum of
                examinations, encompassing visual inspections, X-Ray analyses,
                De-Capsulation assessments, soldering evaluations, meticulous
                electrical and functional tests, anti-static vacuum packaging,
                controlled baking processes, re-reeling procedures, and more.
                <p />
                <br />
                The ethos of Venatronics is intrinsically woven into our Quality
                Policy, centered on the preservation of your supply chain{`'`}s
                integrity and a commitment to ceaseless improvement. At every
                juncture, our emphasis is firmly placed on quality. We proudly
                bear the ISO 9001:2015 certification, a testament to our robust
                quality management system.
                <p />
                <br />
                Venatronics stands as your reliable partner, adeptly certifying
                second-source electronics, and effectively mitigating the
                potential pitfalls stemming from untraceable components within
                your supply chain.
                <Image
                    src="/images/quality2.png"
                    alt="Quality"
                    width={400}
                    className="dark:filter-dark-mode  my-8"
                    height={400}
                />
            </div>
        </div>
    );
}
