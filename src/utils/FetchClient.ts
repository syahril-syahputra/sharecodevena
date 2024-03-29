import { getSession, signOut } from 'next-auth/react';
import { api } from './axios';

interface fetchClientProps {
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
    url: string;
    body?: object;
    token?: string;
}

async function fetchClient({
    method = 'GET',
    url,
    body = {},
    token,
}: fetchClientProps) {
    try {
        const session = await getSession();
        const accessToken = token || session?.access_token;
        console.log(session);

        const response = api({
            method: method,
            url: url,
            data: body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken,
            },
        });
        return response;
    } catch (error) {
        if (error instanceof Response) {
            if (error.status === 401) {
                signOut();
            }

            if (error.status === 403) {
                window.location.href = '/request-email-verification';
            }

            throw error;
        }

        throw new Error('Failed to fetch data', { cause: error });
    }
}

export default fetchClient;
