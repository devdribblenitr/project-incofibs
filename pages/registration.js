import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';

import { v4 } from 'uuid';
import uploadImage from "../components/uploadImage";
import axios from "axios";
import { useRouter } from 'next/router'

// name: req.body.name,
// email: req.body.email,
// photoUrl: req.body.photoUrl,

// designation: req.body.designation,
// organisation: req.body.organisation,
// address: req.body.address,
// gender: req.body.gender,
// contact: req.body.contact,

// submittingPaper: req.body.submittingPaper,
// paperTitle: req.body.paperTitle || null,
// accommodationRequirement: req.body.accommodationRequirement,
// country: req.body.country,
// accompanyingPerson: req.body.accompanyingPerson,

// amount: req.body.amount,
// transactionId: req.body.transactionId,
// paymentDate: req.body.paymentDate,
// bankAccountHolderName: req.body.bankAccountHolderName,
/// paymentRecieptUrl: req.body.paymentRecieptUrl,
// bankName: req.body.bankName,
/// register: req.body.register,

const Registration = () => {
  const { data: session, status } = useSession();
  const [fileUp, setFileUp1] = useState(null);
  const [fileUp2, setFileUp2] = useState(null);
  const [selectCat, setSelectCat] = useState();
  const router = useRouter()
  const [inpval, setInpval] = useState({
    title: "",
    abstract: "",

    designation: "",
    organisation: "",
    address: "",
    accomodation: "",
    gender: "",
    presentation: "",
    phonenumber: "",
    country: "",

    amount: "",
    bankAccountHolderName: "",
    bankName: "",
    paymentDate: "",
    transactionId: "",
    uploadReciept: "",

    accompany: "",
  });
  const amountCategory = [
    {
      value: "Rs. 3,000",
      title: "Coming for a visit"
    },
    {
      value: "Rs. 4,000",
      title: "Research Scholars / Graduate Students"
    },
    {
      value: "Rs. 6,000",
      title: "Academics Delegates"
    },
    {
      value: "Rs. 7,000",
      title: "Industry & RnD Participants"
    },
    {
      value: "$300",
      title: "Foreign Delegates"
    },
    {
      value: "$100",
      title: "Foreign delegates (online)"
    }
  ]

  const getAmountData = (e) => {
    console.log(e.target.value);
    setSelectCat(e.target.value);
  }


  const heading = {
    title: "Title of the Abstract*",
    abstract: "Upload Your Abstract*",

    designation: "Designation*",
    organisation: "Organisation*",
    address: "Address*",
    accomodation: "Accomodation Required*",
    gender: "Gender*",
    presentation: "Are you submitting any paper for presentation?*",
    phonenumber: "Phone number (with country code)*",
    country: "Country*",

    amount: "Amount(INR/USD)*",
    bankAccountHolderName: "Name of the Bank Account Holder*",
    bankName: "Name of the Bank*",
    paymentDate: "Payment Date*",
    transactionId: "Transaction ID/No.*",
    uploadReciept: "Upload Your Reciept*",

    accompany: "Details of accompanying person ,if any:*",
  };

  const options = {
    gender: ["male", "female", "others"],
    accomodation: ["yes", "no"],
    presentation: ["yes", "no"],
  };

  const getData = (e) => {
    // console.log(e.target.value);

    let name, value;
    name = e.target.name;
    value = e.target.value;

    setInpval({ ...inpval, [name]: value });
    console.log(inpval);
  };

  const getFileData1 = (e) => {
    let fileUpload = e.target.files[0];
    console.log("fileUpload", fileUpload);
    setFileUp1(fileUpload);
  }
  const getFileData2 = (e) => {
    let fileUpload = e.target.files[0];
    console.log("fileUpload", fileUpload);
    setFileUp2(fileUpload);
  }

  const addData = async (e) => {
    e.preventDefault();
    var userName = session?.user?.email?.split("@")[0];

    const sessionDetails = {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    }
    const res = { ...inpval, ...sessionDetails }

    console.log("data added succesfully", res);
    console.log("userName", userName);
    localStorage.setItem("user", JSON.stringify([inpval]));

    let image = fileUp;
    console.log("image", image);
    console.log("image.name", image.name);

    let toastId = toast.loading("Uploading your reciept...Please wait!");
    console.log("toastId", toastId);
    const iconUrl = await uploadImage(image, "register/" + userName + "_" + v4() + image.name, toastId);
    console.log("iconUrl", iconUrl);

    let image2 = fileUp2;
    console.log("image2", image2);
    console.log("image2.name", image2.name);

    let toastId2 = toast.loading("Uploading your Abstract...Please wait!");
    console.log("toastId", toastId2);
    const iconUrl2 = await uploadImage(image2, "abstract/" + userName + "_" + v4() + image2.name, toastId2);
    console.log("iconUrl", iconUrl2);

    try {
      console.log("executing axios");
      const response = await axios.post("https://us-central1-incofibs-a001d.cloudfunctions.net/app/user/v2/abstract", {
        name: res.name,
        email: res.email,
        photoUrl: res.image,

        designation: res.designation,
        organisation: res.organisation,
        address: res.address,
        gender: res.gender,
        contact: res.phonenumber,

        submittingPaper: res.presentation,
        accommodationRequirement: res.accomodation,
        country: res.country,
        accompanyingPerson: res.accompany,

        amount: selectCat,
        transactionId: res.transactionId,
        paymentDate: res.paymentDate,
        bankAccountHolderName: res.bankAccountHolderName,
        paymentRecieptUrl: iconUrl,
        bankName: res.bankName,

        paperTitle: res.title || null,
        abstractUrl: iconUrl2,
        register: "created",
      });
      console.log("response", response.data);
      toast.success('You are successfully registered!');
      setTimeout(function () { router.push("/dashboard") }, 3000);
    } catch (error) {
      console.log("error", error);
      toast.error("something went wrong");
    }

  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="registration_box bg-gray-100">
        <div class="container mx-auto">
          <div class="container mx-auto">
            <div class="flex justify-center md:px-6 my-2">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="w-full bg-white  rounded-lg lg:rounded-l-none">
                  <form onSubmit={addData} action="">
                    <div class="px-8 pt-8 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                      <div class="lg:px-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">
                          Name
                        </label>
                        <div class="flex justify-left mb-6">
                          <div class="form-check form-check-inline mr-8">
                            {session?.user?.name}
                          </div>
                        </div>
                      </div>
                      <div class="lg:px-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700">
                          Email
                        </label>
                        <div class="flex justify-left mb-6">
                          <div class="form-check form-check-inline mr-8">
                            {session?.user?.email}
                          </div>
                        </div>
                      </div>
                      {Object.keys(inpval).map((key) => {
                        return (
                          <div key={key}>
                            {(key === "gender" ||
                              key === "accomodation" ||
                              key === "presentation") && (
                                <div class="lg:px-2">
                                  <label class="block mb-2 text-sm font-bold text-gray-700">
                                    {heading[key]}
                                  </label>
                                  <div class="flex justify-left mb-6">
                                    <div class="form-check form-check-inline mr-8">
                                      <input
                                        required
                                        class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                        type="radio"
                                        name={`${key}`}
                                        value={options[key][0]}
                                        onChange={getData}
                                      />
                                      <label class="form-check-label inline-block text-gray-800 capitalize">
                                        {options[key][0]}
                                      </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                      <input
                                        required
                                        class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                        type="radio"
                                        name={`${key}`}
                                        value={options[key][1]}
                                        onChange={getData}
                                      />
                                      <label class="form-check-label inline-block text-gray-800 capitalize">
                                        {options[key][1]}
                                      </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                      <input
                                        required
                                        class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                        type="radio"
                                        name={`${key}`}
                                        value={options[key][2]}
                                        onChange={getData}
                                      />
                                      <label class="form-check-label inline-block text-gray-800 capitalize">
                                        {options[key][2]}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              )}

                            {!(
                              key === "gender" ||
                              key === "accomodation" ||
                              key === "presentation" || key === "amount" ||
                              key === "bankAccountHolderName" ||
                              key === "bankName" ||
                              key === "paymentDate" ||
                              key === "transactionId" ||
                              key === "uploadReciept" ||
                              key === "title" ||
                              key === "abstract"
                            ) && (
                                <div class="mb-4 lg:px-2">
                                  <div className="flex justify-between p-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                      {heading[key]}
                                    </label>
                                  </div>
                                  {
                                    (key === 'email' ?
                                      <input
                                        required
                                        class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="email"
                                        name={`${key}`}
                                        onChange={getData}
                                        style={{ borderRadius: "1.2rem" }}
                                      />
                                      : (key === 'date' || key == 'Date') ?
                                        <input
                                          required
                                          class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                          type="date"
                                          name={`${key}`}
                                          onChange={getData}
                                          style={{ borderRadius: "1.2rem" }}
                                        />
                                        :
                                        <input
                                          required
                                          class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                          type="text"
                                          name={`${key}`}
                                          onChange={getData}
                                          style={{ borderRadius: "1.2rem" }}
                                        />
                                    )
                                  }
                                </div>
                              )}
                          </div>
                        );
                      })}
                    </div>
                    <div class="px-8 pt-8 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                      <h2 className="underline payment_section block mb-2 text-sm font-bold text-gray-800">PAYMENT SECTION</h2>
                    </div>
                    <div class="px-8 pt-8 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                      <div class="mb-4 lg:px-2">
                        <div className="flex justify-between p-2">
                          <label class="block mb-2 text-sm font-bold text-gray-700">
                            Select a category:
                          </label>
                          <select
                            onChange={getAmountData}
                            required
                            style={{ borderRadius: "1.2rem" }}
                            class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow focus:outline-none focus:shadow-outline">
                            <option value={""}></option>
                            {amountCategory.map((item, index) => {
                              return <option key={index} value={item.value}>{item.title}</option>
                            })}
                          </select>
                        </div>
                      </div>
                      {Object.keys(inpval).map((key) => {
                        return (
                          <div key={key}>

                            {(key === "amount" ||
                              key === "bankAccountHolderName" ||
                              key === "bankName" ||
                              key === "paymentDate" ||
                              key === "transactionId" ||
                              key === "uploadReciept") && (
                                <div class="mb-4 lg:px-2">

                                  <div className="flex justify-between p-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                      {heading[key]}
                                    </label>
                                  </div>
                                  {
                                    (key === "amount") ? <h1 style={{ paddingLeft: "12px", fontWeight: "600" }}>{selectCat ? selectCat : "Select a category first"}</h1> :
                                      (key === 'uploadReciept' ?
                                        <input
                                          required
                                          class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                          type="file"
                                          name={`${key}`}
                                          onChange={getFileData1}
                                          style={{ borderRadius: "1.2rem" }}
                                        />
                                        : (key === 'paymentDate') ?
                                          <input
                                            required
                                            class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="date"
                                            name={`${key}`}
                                            onChange={getData}
                                            style={{ borderRadius: "1.2rem" }}
                                          />
                                          :
                                          <input
                                            required
                                            class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name={`${key}`}
                                            onChange={getData}
                                            style={{ borderRadius: "1.2rem" }}
                                          />
                                      )
                                  }
                                </div>
                              )}
                          </div>
                        );
                      })}
                    </div>
                    <div class="px-8 pt-8 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                      <h2 className="underline payment_section block mb-2 text-sm font-bold text-gray-800">Submit Your Abstract</h2>
                    </div>
                    <div class="px-8 pt-8 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                      {Object.keys(inpval).map((key) => {
                        return (
                          <div key={key}>

                            {(key === "title" ||
                              key === "abstract") && (
                                <div class="mb-4 lg:px-2">
                                  <div className="flex justify-between p-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                      {heading[key]}
                                    </label>
                                  </div>
                                  {
                                    (key === 'abstract' ?
                                      <input
                                        required
                                        class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="file"
                                        name={`${key}`}
                                        onChange={getFileData2}
                                        style={{ borderRadius: "1.2rem" }}
                                      />
                                      :
                                      <input
                                        required
                                        class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text"
                                        name={`${key}`}
                                        onChange={getData}
                                        style={{ borderRadius: "1.2rem" }}
                                      />
                                    )
                                  }
                                </div>
                              )}
                          </div>
                        );
                      })}
                    </div>
                    <div class="mb-10 text-center px-4">
                      <button
                        class="w-full px-4 py-2 font-bold text-white bg-[#002834] rounded-full hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                        // onClick={addData}
                        style={{ borderRadius: "999px" }}
                      >
                        Register
                      </button>
                    </div>
                  </form>

                  {/* <div class=" flex justify-center">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                      onClick={() => {
                        setOne(false);
                        setTwo(true);
                      }}
                      style={{borderRadius: "1.8rem"}}
                    >
                      Next
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;