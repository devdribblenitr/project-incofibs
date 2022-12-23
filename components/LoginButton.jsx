
import React, { FC, useState, useEffect } from 'react';
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Account from './Account';
import axios from 'axios';

// import ProfileHover from './profileHover';
// import { BuiltInProviderType } from 'next-auth/providers';

const LoginButton = () => {

    const [providers, setproviders] = useState();
    const { data: session, status } = useSession();
    const [active, setActive] = useState(false);
    const [isUser, setIsUser] = useState(false);


    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState(null);

    const getUserDetails = async (userNameData) => {
        try {
            if ((userNameData !== undefined) && (userNameData !== null) && (userNameData !== "")) {
                const user = await axios.get(`https://us-central1-incofibs-a001d.cloudfunctions.net/app/user/v2/users/${userNameData}`);
                setUserData(user.data);
                if (typeof user.data.email === "string") {
                    setIsUser(true);
                    console.log("true")
                }
            }
        } catch (error) {
            console.log("error user", error);
        }
    }

    const getSessionDetails = async () => {
        const userName = session?.user?.email?.split("@")[0];
        setUserName(userName);
    }

    useEffect(() => {
        getSessionDetails();
    }, [session]);

    useEffect(() => {
        getUserDetails(userName);
    }, [userName && userName !== undefined && userName !== null]);


    useEffect(() => {
        const setTheProviders = async () => {
            const setupProviders = await getProviders();
            setproviders(setupProviders);
        };
        setTheProviders();
    }, []);

    const UserButton = () => {
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
        } else {
            return <Button
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
        }
    }

    console.log({ providers });
    // if (session) {
    //     return (
    //         <div>
    //             <Button
    //                 onClick={() => { setActive(!active) }}
    //                 sx={{
    //                     borderRadius: "40px",
    //                     fontSize: "0.7rem",
    //                     borderColor: "#ffffffba",
    //                     color: "#ffffffba",
    //                     "&:hover": {
    //                         borderColor: "#ffffff",
    //                         color: "white",
    //                     },
    //                 }}
    //                 variant="outlined"
    //             // disabled={true}
    //             >
    //                 <>Profile{active ? <ExpandLessIcon /> : <ExpandMoreIcon />}</>
    //             </Button>
    //             <Account logOut={() => signOut({ callbackUrl: '/' })} active={active} name={session.user?.name} email={session.user?.email} image={session.user?.image} />
    //         </div>
    //         // <ProfileHover/>
    //     );
    // }



    return (
        <>
            <>{isUser ? <Button
                onClick={() => { setActive(!active) }}
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
                Profile
            </Button> : <UserButton />}</>
            <Account
                active={active}
                name={userData?.name}
                email={userData?.email}
                image={userData?.photoUrl}
                logOut={() => signOut({ callbackUrl: '/' })}
            />
        </>
    )
}

export default LoginButton