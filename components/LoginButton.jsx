
import React, { FC, useState, useEffect } from 'react';
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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
        return <Button
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
        >
           Loading...
        </Button>;
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
                   <>Profile{active ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</>
                </Button>
            <Account logOut={() => signOut()} active={active} name={session.user?.name} email={session.user?.email} image={session.user?.image}/>
                </div>
            // <ProfileHover/>
        );
    }

    

    return (
        <Button
        onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}
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
           Log In
        </Button>
    )
}

export default LoginButton