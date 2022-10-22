import React from "react";
import { useState } from "react";

const Registration = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    designation: "",
    organisation: "",
    address: "",
    title: "",
    accomodation: "",
    gender: "",
    presentation: "",
    phonenumber: "",
    accompany: "",
    amount: "",
    draft: "",
    drawn: "",
    bank: "",
    place: "",
    date: "",
    transaction: "",
    transfer: "",
    Date: "",
    account: "",
  });
  const heading = {
    name: "Name",
    email: "Email",
    designation: "Designation",
    organisation: "Organisation",
    address: "Address",
    title: "Title",
    accomodation: "Accomodation Required",
    gender: "Gender",
    presentation: "Are you submitting any paper for presentation?",
    phonenumber: "Phone number",
    accompany: "Details of accompanying person ,if any:",
    amount: "Amount(INR/USD)",
    draft: "Demand draft No.",
    drawn: "Drawn on",
    bank: "in the bank",
    place: "Place",
    date: "Date",
    transaction: "Online transaction on",
    transfer: "Transfer ID/No.",
    Date: "Date",
    account: "Account No. from which transfer was made",
  };

  const options = {
    gender: ["male", "female"],
    accomodation: ["yes", "no"],
    presentation: ["yes", "no"],
  };

  const [edit, setEdit] = useState({
    name: false,
    email: false,
    designation: false,
    address: false,
    title: false,
    accomodation: false,
    gender: false,
    presentation: false,
    phonenumber: false,
    accompany: false,
    amount: false,
    draft: false,
    drawn: false,
    bank: false,
    place: false,
    date: false,
    transaction: false,
    transfer: false,
    Date: false,
    account: false
  });

  const func1 = (e) => {
    e.preventDefault();
  };

  const getData = (e) => {
    // console.log(e.target.value);

    let name, value;
    name = e.target.name;
    value = e.target.value;

    setInpval({ ...inpval, [name]: value });
    console.log(inpval);
  };

  const addData = (e) => {
    e.preventDefault();

    console.log("data added succesfully");
    localStorage.setItem("user", JSON.stringify([inpval]));
  };

  return (
    <div className="bg-gray-100">
      {one && (
        <div class="container mx-auto">
          <div class="container mx-auto">
            <div class="flex justify-center md:px-6 my-2">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="w-full bg-white  rounded-lg lg:rounded-l-none">
                  <form class="px-8 pt-6 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
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
                              </div>
                            </div>
                          )}

                          {!(
                            key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation"
                          ) && (
                            <div class="mb-4 lg:px-2">
                              <div className="flex justify-between p-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700">
                                  {heading[key]}
                                </label>
                              </div>
                              {
                                ( key === 'email'?
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="email"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                : (key === 'date' || key== 'Date')?
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="date"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                :
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="text"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                )
                              }
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </form>
                  <div class="mb-6 text-center px-4">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded-full hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={addData}
                      style={{borderRadius: "999px"}}
                    >
                      Register
                    </button>
                  </div>

                  <div class=" flex justify-center">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* nextnextelement */}
      {two && (
        <div class="container mx-auto">
          {/* testing */}
          <div class="container mx-auto">
            <div class="flex justify-center px-6 my-2">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="w-full bg-white  rounded-lg lg:rounded-l-none">
                  <form class="px-8 pt-6 pb-8 grid grid-cols-1 lg:grid-cols-2 bg-white rounded">
                    {Object.keys(inpval).map((key) => {
                      return (
                        <div key={key}>
                          {(key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation") && (
                            <div class="ml-4">
                              <label class="block mb-2 text-sm font-bold text-gray-700">
                                {heading[key]}
                              </label>
                              <div class="flex justify-left mb-6">
                                <div class="form-check form-check-inline mr-8 h-16 pt-4">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][0]}
                                    checked={inpval[key] === options[key][0]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][0]}
                                  </label>
                                </div>
                                <div class="form-check form-check-inline h-16 pt-4">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][1]}
                                    checked={inpval[key] === options[key][1]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][1]}
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}

                          {!(
                            key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation"
                          ) && (
                            <div class="mb-4 px-2">
                              <div className="flex justify-between p-2">
                                <label
                                  class="block mb-2 text-sm font-bold text-gray-700"
                                  for=""
                                >
                                  {heading[key]}
                                </label>
                                {/* <button onClick={(e)=>{e.preventDefault(); const edit2 = {...edit}; edit2[key] = !edit2[key]; setEdit(edit2)}} className=" py-1 font-semibold px-4  text-white hover:bg-green-600 active:bg-gradient-to-r duration-200 active:from-emerald-500 active:to-green-600" style={{borderRadius: "0.5rem", backgroundColor: "#58b393"}}>{edit[key]?"done":"edit"}</button> */}
                              </div>
                              <div style={{height: "68px"}} className="px-2 flex flex-col">
                              {/* {edit[key] ? (
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" style={{borderRadius: "1.2rem"}}
                                  id="name"
                                  type={key=="date" || key=="Date"?"date": key=="email"?"email":"text"}
                                  name={`${key}`}
                                  value={inpval[key]}
                                  onChange = {getData}
                                />
                              ) : ( */}
                                  <p className="pt-2">{inpval[key]}</p>
                                
                              {/* )} */}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </form>
                  <div class=" flex justify-center py-4">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 duration-200 ease-in-out hover:text-black" style={{borderRadius: "8px"}}
                     onClick={()=>{
                      setOne(true);
                      setTwo(false);
                    }}>
                      Prev
                    </button>
                  </div>
                  <div class="mb-6 text-center px-4">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded-full hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={addData}
                      style={{borderRadius: "9999px"}}
                    >
                      Confirm
                    </button>
                  </div>

                  <div class=" flex justify-center">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 duration-200 ease-in-out hover:text-black" style={{borderRadius: "8px"}}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
