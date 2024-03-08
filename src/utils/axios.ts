import Axios from 'axios';

const api = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
    },
});

export { api };
