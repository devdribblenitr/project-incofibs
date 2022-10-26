import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';

import {v4} from 'uuid';
import uploadImage from "../components/uploadImage";




const Abstract = () => {
    const { data: session, status } = useSession();
    const [fileUp, setFileUp] = useState(null);
  const [inpval, setInpval] = useState({
    designation: "",
    organisation: "",
    address: "",
    title: "",
    gender: "",
    phonenumber: "",
    abstract: "",
  });
  const heading = {
    designation: "Designation",
    organisation: "Organisation",
    address: "Address",
    title: "Title of the Abstract",
    gender: "Gender",
    phonenumber: "Phone number",
    abstract: "Upload Your Abstract",
  };

  const options = {
    gender: ["male", "female"],
  };

  const getData = (e) => {
    // console.log(e.target.value);

    let name, value;
    name = e.target.name;
    value = e.target.value;

    setInpval({ ...inpval, [name]: value });
    console.log(inpval);
  };

  const getFileData = async (e) => {
    let fileUpload = e.target.files[0];
    console.log("fileUpload",fileUpload);

   try {
    var userName = session?.user?.email?.split("@")[0];

    let image = fileUpload;
    console.log("image",image);
    console.log("image.name",image.name);
    let toastId = toast.loading("Uploading your abstract...Please wait!");
    const iconUrl = await uploadImage(image, "abstract/" + userName + "_" + v4() + image.name, toastId);
    console.log("iconUrl", iconUrl);

   } catch (error) {
    console.log(error);
   }
    // setFileUp(fileUpload);
  }

  const addData = (e) => {
    e.preventDefault();
    var userName = session?.user?.email?.split("@")[0];

    const sessionDetails = {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
    }
    const res = {...inpval, ...sessionDetails}

    console.log("data added succesfully", res);
    console.log("userName", userName);
    localStorage.setItem("user", JSON.stringify([inpval]));
  };

  return (
    <>
      <Navbar/>
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
                          {!( key === "gender" || key === "abstract" ) && (
                            <div class="mb-4 lg:px-2">
                              <div className="flex justify-between p-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700">
                                  {heading[key]}
                                </label>
                              </div>
                              {
                                (
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="text"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                  required
                                />
                                )
                              }
                            </div>
                          )}
                          {(key === "gender") && (
                            <div class="lg:px-2">
                              <label class="block mb-2 text-sm font-bold text-gray-700">
                                {heading[key]}
                              </label>
                              <div class="flex justify-left mb-6">
                                <div class="form-check form-check-inline mr-8">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][0]}
                                    onChange={getData}
                                    required
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][0]}
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][1]}
                                    onChange={getData}
                                    required
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][1]}
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                          {(key === "abstract") && (
                            <div class="mb-4 lg:px-2">
                              <div className="flex justify-between p-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700">
                                  {heading[key]}
                                </label>
                              </div>
                              {
                                (
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="file"
                                  name={`${key}`}
                                  onChange={getFileData}
                                  style={{borderRadius: "1.2rem"}}
                                  required
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
                      style={{borderRadius: "999px"}}
                    //   onSubmit={addData}
                    >
                      Submit Your Abstract
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Abstract;
