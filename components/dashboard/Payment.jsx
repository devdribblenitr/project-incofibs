import { Button, TextField } from "@material-ui/core"
import Link from "next/link"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// const FileUpload = require("react-mui-fileuploader");
import logoBranding from '../../public/logoBranding.png'
import { useEffect } from "react";
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import axios from "axios";
import { useRouter } from "next/router";
import preloader from "../../public/preloader.svg";

const Payment = () => {
  const [valueDate, setValueDate] = useState(dayjs());

  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);

  const router = useRouter();
  const { data: session, status } = useSession();

  const getUserDetails = async (userNameData) => {
    try {
      console.log("userNameData", userNameData);
      const user = await axios.get(`https://us-central1-incofibs-a001d.cloudfunctions.net/app/user/v2/users/${userNameData}`);
      setUserData(user.data);
      console.log("userDetails", user.data);
    } catch (error) {
      console.log("error user", error);
    }
  }

  const getSessionDetails = async () => {
    const userName = session?.user?.email?.split("@")[0];
    setUserName(userName);
    console.log('session?.user', session?.user);
  }

  useEffect(() => {
    getSessionDetails();
  }, [session]);

  useEffect(() => {
    getUserDetails(userName);
  }, [userName && userName !== "undefined" && userName !== "null"]);

  // useEffect(() => {
  //   router.push('/');
  // }, [!userData])

  // const handleDateChange = (newValue) => {
  //   setValueDate(newValue);
  // };

  // const handleFileUploadError = (error) => {
  //   // Do something...
  // }

  // const handleFilesChange = (files) => {
  //   // Do something...
  // }
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
        {/* amount: null,
            transactionId: null,
            paymentDate: null,
            bankAccountHolderName: null,
            paymentRecieptUrl: null, */}
        <div className="dashboard_content bg-white p-[35px] col-span-12 md:col-span-9">
          <p style={{ textTransform: "capitalize" }} className="paymentStatus">{userData?.paymentVerification ? 'Your payment has been verified !' : 'Your payment has not been verified yet !'}</p>
          <div className="grid gap-2 grid-cols-12">
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-6">
              <span className="">Account Holder Name:</span>{userData?.bankAccountHolderName}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-6">
              <span className="">Bank Name:</span>{userData?.bankName}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-6">
              <span className="" style={{ textTransform: "capitalize" }}>Amount:</span>{userData?.amount}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-6">
              <span className="" style={{ textTransform: "capitalize" }}>Transaction Id:</span>{userData?.transactionId}
            </div>
            {/* <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
              <span className="">Title of the Paper:</span>{userData?.paperTitle}
            </div> */}
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-6">
              <span className="" style={{ textTransform: "capitalize" }}>Payment Reciept:</span>{userData && <Link href={userData?.paymentRecieptUrl} style={{ background: "#01212b", padding: "3px 8px", color: "white" }} varient="contained">View</Link>}
            </div>
            <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-6">
              <span className="" style={{ textTransform: "capitalize" }}>Payment Verification Status:</span>{userData?.paymentVerification ? "Verified" : "Not Verified"}
            </div>

          </div>
        </div>
      </div> : <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={preloader.src} alt="preloader" />
      </div>}
    </div>
  )
}

export default Payment