import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function NewsLetter() {
    return (
        <section className=" flex-1 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-md text-left">
                    <h2 className="mb-4 text-[30px] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[30px]">
                        Newsletter
                    </h2>

                    <form action="#">
                        <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 ">
                            <div className="relative w-full  text-center md:text-left">
                                <label className="mb-2 hidden  text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Email address
                                </label>
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:rounded-none sm:rounded-l-lg"
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer rounded-lg border border-cyan-600 bg-cyan-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:rounded-none sm:rounded-r-lg md:w-auto"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;
