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
                <h1 className="text-xxl ">Your Needs, Our Priority.</h1>
                <div>
                    Occaecat dolor minim dolor consequat. Commodo occaecat
                    mollit excepteur ullamco magna reprehenderit labore in nulla
                    non cillum ad.
                </div>
            </div>
            <Image
                src="/images/sample.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="asd"
                className="mx-auto w-full max-w-4xl rounded-md"
            />
            <div className="mx-auto max-w-4xl space-y-4 text-center font-bold">
                <h1 className="text-lg ">
                    In Lorem sit consectetur enim ipsum magna voluptate magna
                    exercitation.
                </h1>
                <div>
                    Consequat qui non aliqua nisi excepteur velit mollit.
                    Consequat eiusmod ullamco dolor minim exercitation sit
                    consectetur consequat in do officia non. Qui duis aliquip
                    voluptate aliquip irure quis minim. Deserunt ut ad id aliqua
                    reprehenderit nostrud ad. Adipisicing officia cillum nostrud
                    duis exercitation veniam anim aute laboris consequat
                    consequat.
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
