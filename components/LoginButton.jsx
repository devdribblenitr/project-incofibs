
import React, { FC, useState, useEffect } from 'react';
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Account from './Account';

// import ProfileHover from './profileHover';
// import { BuiltInProviderType } from 'next-auth/providers';

const LoginButton = () => {

    const [providers, setproviders] = useState();
    const { data: session, status } = useSession();
    const [active, setActive] = useState(false);

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
                <div>
                    <Button
                // onClick={() => signOut()}
                onClick={()=>{setActive(!active)}}
                sx={{
                    borderRadius: "40px",
                    fontSize: "0.7rem",
                    borderColor: "#ffffffba",
                    color: "#ffffffba",
                    "&:hover": {
                      borderColor: "#ffffff",
                      color: "white",
                    },
                }}
                variant="outlined"
                // disabled={true}
                >
                   <>{session.user?.name}<ExpandMoreIcon/></>
                   {console.log(session.user)}
                </Button>
            <Account active={active}/>
                </div>
            // <ProfileHover/>
        );
    }

    

    return (
        <button onClick={() => signIn(providers.google.id)} className='border-[1px] border-white px-3 py-1 rounded-3xl hover:opacity-60'>LOG IN</button>
    )
}

export default LoginButton