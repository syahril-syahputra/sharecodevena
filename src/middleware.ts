import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const session = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    if (session) {
        if (
            request.nextUrl.pathname.startsWith('/auth/') &&
            !request.nextUrl.pathname.endsWith('/email-verification')
        ) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        // if (
        //     (request.nextUrl.pathname.startsWith('/auth/') ||
        //         request.nextUrl.pathname.startsWith('/admin/member')) &&
        //     session.user.userDetail.role_id != 2
        // ) {
        //     return NextResponse.redirect(
        //         new URL('/admin/superadmin', request.url)
        //     );
        // }
    }
}

// export const config = {
//   matcher: ['/admin/:path*'],
// }
