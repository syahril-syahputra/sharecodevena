import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from './axios';

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
    },
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            async authorize(credentials: any) {
                try {
                    const response = await api.post('/auth/login', {
                        email: credentials.email,
                        password: credentials.password,
                        remember_me: JSON.parse(credentials.remember_me),
                    });

                    const user = response.data;

                    if (user) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const result: any = {
                            email: credentials.email,
                            accessToken: response.data.data.access_token,
                        };

                        return result;
                    }

                    return null;
                } catch (error) {
                    if (error instanceof Response) {
                        return null;
                    }

                    throw new Error('Account Not Found');
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }

            return token;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, token }: any) {
            session.accessToken = token.accessToken;
            // session.user.email = token.email;

            return session;
        },
    },
    // events: {
    //     async signOut({ token }) {
    //         await fetchClient({
    //             method: 'POST',
    //             url: process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/logout',
    //             token: token.accessToken,
    //         });
    //     },
    // },
};

// async function refreshAccessToken(token: JWT) {
//     try {
//         const response = await fetchClient({
//             method: 'POST',
//             url: process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/refresh',
//             token: token.accessToken,
//         });

//         if (!response.ok) throw response;

//         const refreshedAccessToken: { access_token: string } =
//             await response.json();
//         const { exp } = jwt.decode(refreshedAccessToken.access_token);

//         return {
//             ...token,
//             accessToken: refreshedAccessToken.access_token,
//             exp,
//         };
//     } catch (error) {
//         return {
//             ...token,
//             error: 'RefreshAccessTokenError',
//         };
//     }
// }
