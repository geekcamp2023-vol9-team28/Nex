'use client'

import { useSearchParams } from 'next/navigation'
import axios from "axios"


export default async function SearchBar() {

    const searchParams = useSearchParams()
    const keyToken = searchParams.get('key_token');

    const response = await axios.post('http://localhost:8000/api/token', { key_token: keyToken });
    const { token, refreshToken } = response.data;
    console.log(token, refreshToken);

    return (
        <>
        <p>token, {token}</p>
        <p>refreshToken, {refreshToken}</p>
        </>
    )
}


