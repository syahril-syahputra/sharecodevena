import Axios from 'axios';

const api = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: {
        'Content-type': 'application/json',
    },
});

export { api };
