
import React, { FC, useState, useEffect } from 'react';
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
// import { BuiltInProviderType } from 'next-auth/providers';

const LoginButton = () => {

    const [providers, setproviders] = useState();
    const { data: session, status } = useSession();

    useEffect(() => {
        const setTheProviders = async () => {
            const setupProviders = await getProviders();
            setproviders(setupProviders);
        };
        setTheProviders();
    }, []);

    if (status === 'loading') {
        return <h1>Loading...</h1>;
    }

    console.log({ providers });
    if (session) {
        return (
            <button type="button" className='border-[1px] border-white px-3 py-1 rounded-3xl hover:opacity-60' onClick={() => signOut()}>
                {session.user?.email}
            </button>
        );
    }

    return (
        <button onClick={() => signIn(providers.google.id)} className='border-[1px] border-white px-3 py-1 rounded-3xl hover:opacity-60'>LOG IN</button>
    )
}

export default LoginButton