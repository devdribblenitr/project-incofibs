import React from "react";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="bg-slate-500 text-slate-100 float-left w-1/4 p-6 h-screen">
        <Link href="/Profile">
          <a className="text-3xl m-8">Profile</a>
        </Link>
        <hr />
        <Link href="/Payment">
          <a className="text-3xl m-8">Payment</a>
        </Link>
        <hr />
      </div>
      <div className="flex bg-slate-700 text-slate-200 float-left p-6 h-screen w-3/4 absolute top-0 right-0 z-10">
        <section className="w-4/5">
          <div className="flex my-2">
            <label className="w-16">Name :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-28">Designation :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-32">Organization :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="my-2">
            <label>Address :</label>
            <input
              type="text"
              className="w-full p-2 my-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="mt-2">
            <label>Phone No. :</label>
            <input
              type="tel"
              className="w-2/5 p-2 m-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />

            <label className="ml-2">Mobile No. :</label>
            <input
              type="tel"
              className="w-60 p-2 m-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-24">E-mail Id :</label>
            <input
              type="email"
              className="w-full p-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-3">
            <label>Are you submitting any paper for presentation? :</label>
            <input
              type="radio"
              className="mx-2"
              name="fav_language"
              value="HTML"
            />
            <label for="Yes">Yes</label>
            <input
              type="radio"
              className="mx-2"
              name="fav_language"
              value="HTML"
            />
            <label for="No">No</label>
          </div>
          <div className="flex my-3">
            <label className="w-40">Title of the paper :</label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="">
            <label>Accommodation Required :</label>
            <input
              type="text"
              className="w-full p-2 my-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-3">
            <label>Gender :</label>
            <input
              type="radio"
              className="mx-2"
              name="fav_language"
              value="HTML"
            />
            <label for="Male">Male</label>
            <input
              type="radio"
              className="mx-2"
              name="fav_language"
              value="HTML"
            />
            <label for="Female">Female</label>
          </div>
          <div className="">
            <label>Details of Accompanying Persion, if any :</label>
            <input
              type="text"
              className="w-full p-2 my-2 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
        </section>
      </div>
    </>
  );
}
