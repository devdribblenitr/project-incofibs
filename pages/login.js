import Footer from '../components/Footer'
import LoginComp from '../components/LoginComp'
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Login = () => {
  const [providers, setproviders] = useState();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userName, setUserName] = useState(null);

  const getUserDetails = async (userNameData) => {
    try {
      if ((userNameData !== undefined) && (userNameData !== null) && (userNameData !== "")) {
        const user = await axios.get(`https://us-central1-incofibs-a001d.cloudfunctions.net/app/user/v2/users/${userNameData}`);
        if (typeof user.data.email === "string") {
          router.push("/dashboard");
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

  return (
    <>
      <Navbar />
      <LoginComp />
      <Footer />
    </>
  )
}

export default Login