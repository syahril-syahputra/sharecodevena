import Image from 'next/image';
import React from 'react';

export default function page() {
    return (
        <div>
            <div className="relative flex h-auto w-full items-center bg-slate-300 dark:bg-slate-700 ">
                <div className="container pb-12 pt-24">
                    <h1 className="text-[48px]">Our Services</h1>
                </div>
            </div>

            <div className="container space-y-8 py-8">
                <div className="">
                    <h2>Obsolete Component Management</h2>
                    <div className="relative float-left mb-8 mr-4  w-1/2 overflow-visible px-3 pt-4">
                        <Image
                            src="/images/obsolete-management.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Obsolete Component Management"
                            className="z-10  mx-auto w-full flex-1 rounded-lg"
                        />
                        <div className="absolute -bottom-3 -left-0 right-8 top-8 -z-10 rounded-lg bg-cyan-600"></div>
                    </div>

                    <div className="flex-1">
                        Obsolete Component Management Explore the world of
                        electronic components where obsolescence isn{`'`}t an
                        obstacle; it{`'`}s an opportunity. When an electronic
                        component becomes obsolete—no longer in production by
                        the original manufacturer (OCM)—it paves the way for
                        innovation and adaptability.
                        <p />
                        <br />
                        Obsolescence can arise when newer, superior technologies
                        emerge, ushering in smaller silicon processes or
                        extended functionality devices. Alternatively, dwindling
                        market demand might lead to the discontinuation of
                        certain components. These nuances are integral to the
                        intricate dance of electronics evolution.
                        <p />
                        <br />
                        Electronic products are meticulously designed to
                        harmonize with specific components. A swap of even one
                        component can necessitate significant redesigning,
                        potentially disrupting the carefully orchestrated
                        balance. Consequently, when an OCM discontinues a
                        component in active production across industries, OEMs
                        are swift to safeguard their production lines for the
                        years ahead.
                        <p />
                        <br />
                        In the realm of obsolete electronic components, the norm
                        is to seek out these essential components rather than
                        attempting complex replacements, which can introduce
                        more complications than solutions.
                        <p />
                        <br />
                        When pursuing obsolete electronic components, the triad
                        of Traceability, Testing, and Authentication emerges as
                        the linchpin for sustaining functionality and production
                        continuity. Venatronics stands as your dependable source
                        for authenticated and reliable obsolete electronic
                        components, serving diverse applications including
                        Military, Medical, and Industrial sectors, and catering
                        to a global network of OEMs.
                        <p />
                        <br />
                        Behind our commitment to quality is a meticulous vendors
                        {`'`}
                        qualification program, fortified with up-to-date
                        certifications. Our esteemed list of vendors comprises
                        franchised distributors, qualified stocking
                        distributors, and Authorized End-of-Life extension
                        distributors.
                        <p />
                        <br />
                        We offer obsolete electronic components with
                        crystal-clear traceability (Certificate of Conformance)
                        or authentication reports, perfectly aligned with your
                        specific testing requirements document. At Venatronics,
                        we understand that the past is the foundation of the
                        future, and we{`'`}re here to help you navigate it
                        seamlessly.
                    </div>
                </div>
                <div>
                    <h2>Excess Stock Management</h2>
                    <div>
                        Venatronics takes pride in actively assisting our
                        clients to effectively manage their excess inventory.
                        When you collaborate with us by sharing your surplus
                        stock, you unlock an exclusive opportunity to partake in
                        our complimentary program, strategically crafted to
                        showcase and sell your surplus inventory on a global
                        scale.
                    </div>
                </div>
            </div>
        </div>
    );
}
