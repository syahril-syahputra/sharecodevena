import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faFacebook,
    faLinkedin,
    // faTwitter,
    // faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { ButtonTheme } from './ButtonTheme';
import LanguageButton from './LanguageButton';
import Link from 'next/link';
import { getCurrentUser } from '@/utils/session';
import fetchServer from '@/utils/fetchServer';
import ResendVerificationEmail from './ResendVerificationEmail';

async function getDataUser() {
    const session = await getCurrentUser();
    try {
        if (session) {
            const response = await fetchServer({ url: '/user/me' });

            return response.data.data.email_verified_at;
        } else {
            return true;
        }
    } catch (error) {
        // console.log(error);
        return true;
    }
}

export default async function TopNavbar() {
    const session = await getCurrentUser();
    let verified = true;
    if (session && !session?.email_verified_at) {
        const res = await getDataUser();
        if (!res) {
            verified = false;
        }
    }
    return (
        <>
            {!verified && <ResendVerificationEmail />}
            <div className=" bg-slate-700 py-2 text-white">
                <div className="container flex items-center justify-between">
                    <div className="space-x-4">
                        {/* <FontAwesomeIcon
                        icon={faFacebook}
                        className="h-[20px] text-[20px] text-white"
                    /> */}
                        <Link
                            href="https://www.linkedin.com/company/venatronics-llc/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="h-[20px] text-[20px] text-white"
                            />
                        </Link>
                        {/* <FontAwesomeIcon
                        icon={faTwitter}
                        className="h-[20px] text-[20px] text-white"
                    />
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className="h-[20px] text-[20px] text-white"
                    /> */}
                    </div>
                    <div className="flex space-x-4">
                        <ul className="hidden items-center space-x-8 text-sm md:flex">
                            <li className="flex items-center space-x-2">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="h-[20px] text-[20px] text-white"
                                />
                                <label>info@venatronics.com</label>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FontAwesomeIcon
                                    icon={faPhoneFlip}
                                    className="h-[15px] text-[15px] text-white"
                                />
                                <label>+1 236 994 0029</label>
                            </li>
                        </ul>
                        <ButtonTheme />
                        <LanguageButton />
                    </div>
                </div>
            </div>
        </>
    );
}
