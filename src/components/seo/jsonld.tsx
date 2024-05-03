export const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Venatronics',
    url: 'https://www.venatronics.com',
    description:
        'Venatronics specializes in selling electronic components, managing obsolete components, and dealing with excess stock. We ensure the authenticity of all our parts.',
    logo: 'https://www.venatronics.com/logo.png',
    sameAs: ['https://www.linkedin.com/company/venatronics-llc/'],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+12369940029',
        contactType: 'Sales representative',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://venatronics.com/product/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
};

export const jsonLdProduct = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: 'Product Name',
    description: 'Product Description',
    brand: {
        '@type': 'Brand',
        name: 'Manufacturer Name',
    },
    sku: 'Product Part Number',
    offers: {
        '@type': 'Offer',
        availability: 'http://schema.org/InStock',
        price: 'Product Price',
        priceCurrency: 'USD',
        seller: {
            '@type': 'Organization',
            name: 'Venatronics',
        },
    },
};
