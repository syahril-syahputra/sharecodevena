import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import 'server-only';
import { authOptions } from './auth';
import { api } from './axios';

interface fetchServerProps {
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
    url: string;
    body?: object;
}

async function fetchServer({
    method = 'GET',
    url,
    body = {},
}: fetchServerProps) {
    try {
        const session = await getServerSession(authOptions);

        const response = api({
            method: method,
            url: url,
            data: body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + session?.access_token,
            },
        });

        return response;
    } catch (error) {
        if (error instanceof Response) {
            if (error.status === 401) {
                return redirect('/login');
            }

            if (error.status === 403) {
                return redirect('/request-email-verification');
            }
        }

        throw new Error('Failed to fetch data from the server', {
            cause: error,
        });
    }
}

export default fetchServer;
