import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
// import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: 'A123',
    providers: [],
    // providers: [
    //     CredentialsProvider({
    //         type: 'credentials',
    //         name: 'credentials',
    //         credentials: {},
    //         async authorize(credentials, req) {
    //             const res = await fetch(
    //                 process.env.NEXT_PUBLIC_BACKEND_URL + '/login',
    //                 {
    //                     method: 'POST',
    //                     body: JSON.stringify(credentials),
    //                     headers: {
    //                         Accept: 'application/json',
    //                         'Content-Type': 'application/json',
    //                     },
    //                 }
    //             );
    //             const user = await res.json();
    //             if (!res.ok) {
    //                 throw new Error(user.message);
    //             }

    //             if (res.ok && user) {
    //                 return {
    //                     name: user.data.user.name,
    //                     userDetail: user.data.user,
    //                     accessToken: user.data.token,
    //                     isCompanyConfirmed: user.data.is_confirmed,
    //                     dashboardStatus: null,
    //                 };
    //             }

    //             return null;
    //         },
    //     }),
    // ],
    pages: {
        signIn: '/auth/login',
    },
    // callbacks: {
    //     async jwt({ token, user, trigger, session }) {
    //         if (user) {
    //             const { accessToken, ...rest } = user;
    //             token.accessToken = accessToken;
    //             token.user = rest;
    //             token.userRole = 'admin';
    //         }

    //         if (trigger === 'update') {
    //             if (session.dashboardStatus) {
    //                 if (session.dashboardStatus === 'delete') {
    //                     token.user.dashboardStatus = undefined;
    //                 } else {
    //                     token.user.dashboardStatus = session.dashboardStatus;
    //                 }
    //             }
    //             if (session.userDetail) {
    //                 token.user.userDetail = session.userDetail;
    //             }
    //         }

    //         return token;
    //     },
    //     async session({ token }) {
    //         return token;
    //     },
    // },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
