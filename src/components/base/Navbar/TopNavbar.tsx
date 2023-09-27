import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { ButtonTheme } from './ButtonTheme';
import LanguageButton from './LanguageButton';

export default function TopNavbar() {
    return (
        <div className=" bg-slate-700 py-2 text-white">
            <div className="container flex items-center justify-between">
                <div className="space-x-4">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="h-[20px] text-[20px] text-white"
                    />
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="h-[20px] text-[20px] text-white"
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="h-[20px] text-[20px] text-white"
                    />
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className="h-[20px] text-[20px] text-white"
                    />
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
                            <label>+17149090029</label>
                        </li>
                    </ul>
                    <ButtonTheme />
                    <LanguageButton />
                </div>
            </div>
        </div>
    );
}
