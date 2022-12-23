import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { Router, useRouter } from "next/router";
import preloader from "../../public/preloader.svg";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);

  const router = useRouter();
  const { data: session, status } = useSession();

  const getUserDetails = async (userNameData) => {
    try {
      console.log("userNameData", userNameData);
      if ((userNameData !== undefined) && (userNameData !== null) && (userNameData !== "")) {
        const typeS = typeof userNameData;
        console.log("userNameDataType", userNameData, typeS);
        const user = await axios.get(`https://us-central1-incofibs-a001d.cloudfunctions.net/app/user/v2/users/${userNameData}`);
        const typeUser = typeof user.data;
        console.log(user.data, typeUser);
        console.log(user.data, typeUser);
        console.log(user.data, typeUser);
        console.log(user.data, typeUser);
        setUserData(user.data);
        console.log("userDetails", user.data);
      }
    } catch (error) {
      console.log("error user", error);
    }
  }

  const getSessionDetails = async () => {
    const userName = session?.user?.email?.split("@")[0];
    setUserName(userName);
    console.log('session?.user', session?.status);
  }

  useEffect(() => {
    // router.push('/');
    console.log("userData pushed to  home");
  }, [!userData])

  useEffect(() => {
    getSessionDetails();
  }, [session])

  useEffect(() => {
    getUserDetails(userName);
  }, [userName && userName !== undefined && userName !== null]);

  if (!session && typeof window !== 'undefined') {
    alert("Please login to continue");
  }


  return (
    <div className="py-[2.5rem] dashboard_profile">
      {userData ? <div className="grid gap-5 grid-cols-12">
        <div className="dashboard_navbar bg-white py-[25px] col-span-12 md:col-span-3">
          <Link href='/dashboard'>
            <div className="dashboard_navLink p-[25px] text-left">
              Profile
            </div>
          </Link>
          <Link href='/dashboard/payment'>
            <div className="dashboard_navLink p-[25px] text-left">
              Payment
            </div>
          </Link>
          <Link href='/dashboard/notification'>
            <div className="dashboard_navLink p-[25px] text-left">
              Notification
            </div>
          </Link>
          <div className="dashboard_navLink p-[25px] text-left">
            Sign out
          </div>
        </div>
        <div className="dashboard_content bg-white p-[25px] col-span-12 md:col-span-9">
          <div className="dashboard_content_firstrow grid gap-10 grid-cols-12">
            <div className="dashboard_image col-span-6 md:col-span-2">
              <img style={{ width: "100%" }} src={userData?.photoUrl} className="dashboard_image_imgs" alt="user_image" />
            </div>
            <div className="dashboard_image col-span-6 md:col-span-10">
              <div className="mt-1 inside_dashboard grid gap-2 grid-cols-12">
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="">Name:</span>{userData?.name}
                </div>
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="">Email:</span>{userData?.email}
                </div>
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="">ContactNo:</span>{userData?.contact}
                </div>
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="">Organization:</span>{userData?.organisation}
                </div>
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="" style={{ textTransform: "capitalize" }}>Gender:</span>{userData?.gender}
                </div>
                <div className="inside_dashboard_span col-span-12 md:col-span-6">
                  <span className="">Country:</span>{userData?.country}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-12">
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-4">
              <span className="">Designation:</span>{userData?.designation}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-8">
              <span className="">Address:</span>{userData?.address}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
              <span className="" style={{ textTransform: "capitalize" }}>Are you submitting any paper for presentation:</span>{userData?.submittingPaper}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
              <span className="">Title of the Paper:</span>{userData?.paperTitle}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
              <span className="" style={{ textTransform: "capitalize" }}>Details of Accompanying Person, if any:</span>{userData?.accompanyingPerson}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
              <span className="" style={{ textTransform: "capitalize" }}>Accommodation Required:</span>{userData?.accommodationRequirement}
            </div>
          </div>
        </div>
      </div> : <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={preloader.src} alt="preloader" />
      </div>}
    </div>
  )
}

export default Dashboard