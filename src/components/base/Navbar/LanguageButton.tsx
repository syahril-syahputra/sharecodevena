import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

export default function LanguageButton() {
    const [language, setlanguage] = useState('en');

    const supportLanguage = [
        {
            id: 'en',
            title: '🇺🇸 English [EN]',
        },
        {
            id: 'ge',
            title: '🇩🇪 Germany [GE]',
        },
        {
            id: 'es',
            title: '🇪🇸 Spanish [ES]',
        },
    ];
    return (
        <Dropdown
            inline
            label={supportLanguage.find((x) => x.id === language)?.title}
            value={language}
            arrowIcon
            className="text-green-500"
        >
            {supportLanguage.map((data) => {
                return (
                    <Dropdown.Item
                        key={data.id}
                        value={data.id}
                        onClick={() => setlanguage(data.id)}
                    >
                        {data.title}
                    </Dropdown.Item>
                );
            })}
        </Dropdown>
    );
}
