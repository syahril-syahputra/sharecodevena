import type { Metadata } from 'next';

export const siteMeta: Metadata = {
    title: 'Venatronics',
    description:
        'Venatronics specializes in selling electronic components, managing obsolete components, and dealing with excess stock. We ensure the authenticity of all our parts.',
    keywords: 'selling, electronics, components, authenticity, excess stock',
    applicationName: 'Venatronics',
    metadataBase: new URL('https://venatronics.com'),
    alternates: { canonical: 'https://venatronics.com' },
    icons: 'https://venatronics.com/logo.png',
    openGraph: {
        type: 'website',
        url: 'https://venatronics.com',
        title: 'Venatronics',
        description:
            'Venatronics specializes in selling electronic components, managing obsolete components, and dealing with excess stock. We ensure the authenticity of all our parts.',
        siteName: 'Venatronics',
        images: [
            {
                url: 'https://venatronics.com/logo.png',
            },
        ],
    },
};
