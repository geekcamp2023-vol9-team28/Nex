'use client'

import { useRouter } from 'next/router';
import axios from "axios"


export default async function PostToken() {
    const router = useRouter();
    const token = router.query.key_token;

    await axios.post('/api/token', { key_token: token});
    return <>Search: {token}</>;
}




