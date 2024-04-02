'use client';
import React from 'react';

import { api } from '@/utils/axios';
import fetchClient from '@/utils/FetchClient';
import { useSession } from 'next-auth/react';
export default function Page() {
    async function testing() {
        try {
            // const response = await api.get('/user/me', {
            //     headers: {
            //         'X-Access-Token': 'Bearer ' + session?.accessToken,
            //     },
            // });
            const responsea = await fetchClient({ url: '/user/me' });
            console.log(responsea);
            // console.log(response);
            // await api
            //     .post('URL_LOGIN_BACKEND', {
            //         username: 'username',
            //         password: 'password',
            //     })
            //     .then((response) => {
            //         // Tanggapan berhasil
            //         console.log('Response:', response.data);
            //         // Simpan cookie yang diterima untuk penggunaan selanjutnya
            //         const cookies = response.headers['set-cookie'];
            //         console.log(cookies)
            //         // Gunakan cookies untuk otentikasi permintaan berikutnya
            //         api.defaults.headers.Cookie = cookies;
            //     })
            //     .catch((error) => {
            //         // Tanggapan gagal
            //         console.error('Error:', error);
            //     });
        } catch (error) {
            console.log(error);
        }
    }

    async function cobalogin() {
        try {
            const response = await api.post('/auth/login', {
                email: 'irham.sahbana@venatronics.com',
                password: 'KataSandi123',
                remember_me: true,
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const { data: session, update } = useSession();
    async function cobaverifikasi() {
        await update({
            email_verified_at: 'aaa',
        });
    }
    async function cobanull() {
        await update({
            email_verified_at: 'delete',
        });
    }
    return (
        <div>
            <button onClick={testing}>Testing</button> |
            <button onClick={cobalogin}>Coba Login</button> |
            <button onClick={cobaverifikasi}>sudahverifikasi</button>
            <button onClick={cobanull}>belum verifikasi</button>
            <hr />
            {JSON.stringify(session)}
        </div>
    );
}
