import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTags, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

function Priority() {
    return (
        <div className="container  space-y-8 py-16">
            <div className="mx-auto max-w-4xl space-y-4 text-center font-bold">
                <div className="text-xxl ">
                    We Provide Only Authenticated Parts
                </div>
                <div>
                    Exepart Electronics Inc. excels in offering genuine
                    electronic components directly from manufacturers, as well
                    as through our extensive network of franchised distributors
                    and qualified OEM vendors.
                </div>
            </div>
            <Image
                src="/images/sample.webp"
                width={0}
                height={0}
                sizes="100vw"
                alt="asd"
                className="mx-auto w-full max-w-4xl rounded-[20%] shadow-2xl"
            />
            <div className="mx-auto max-w-4xl space-y-4 text-center font-bold">
                {/* <h1 className="text-lg ">
                    In Lorem sit consectetur enim ipsum magna voluptate magna
                    exercitation.
                </h1> */}
                <div>
                    We provide a distinctive solution to tier-1, tier-2, and
                    tier-3 OEMs and CMs who are in need of reliable and
                    authenticated obsolete electronic components. As part of our
                    service, every purchase order from Exepart Electronics Inc.
                    undergoes a thorough Quality Inspection. We are dedicated to
                    combating counterfeit products and offer authentication and
                    testing services for electronic components, along with
                    value-added services. All orders placed with Exepart
                    Electronics Inc. are mandatory tested and authenticated by
                    White Horse Laboratories.
                </div>
            </div>
            <div className="mx-auto flex flex-col rounded-lg  bg-slate-300 bg-opacity-40 p-8 font-bold dark:bg-slate-700 md:flex-row">
                <div className="flex-1">
                    <span className="flex items-center space-x-4 text-lg text-teal-500  dark:text-teal-400">
                        <FontAwesomeIcon icon={faThumbsUp} fontSize={40} />
                        <label>Quick Support</label>
                    </span>
                    <ul className="space-y-4 py-4 pl-14">
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Respond to enquiries within{' '}
                                <label className="text-lg font-bold text-teal-500  dark:text-teal-400">
                                    1 hour
                                </label>
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Receive quotation within{' '}
                                <label className="text-lg font-bold text-teal-500  dark:text-teal-400">
                                    8 hours
                                </label>
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Order shipment within{' '}
                                <label className="text-lg font-bold text-teal-500  dark:text-teal-400">
                                    24 hours
                                </label>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <span className="flex items-center space-x-4 text-lg text-teal-500  dark:text-teal-400">
                        <FontAwesomeIcon icon={faTags} fontSize={40} />
                        <label>Competitive Pricing</label>
                    </span>
                    <ul className="space-y-4 py-4 pl-14">
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Achieve a more competitive price in the market{' '}
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Through our extensive global networking{' '}
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                fontSize={30}
                            />
                            <span>
                                Support by 5 experienced procurement team{' '}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <Button className="mx-auto px-20">About Us</Button>
        </div>
    );
}

export default Priority;
