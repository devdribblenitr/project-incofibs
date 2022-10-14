import React from "react";
import Link from "next/link";

export default function Payment() {
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
      <div className="flex bg-slate-700 text-slate-200 float-left p-6 h-screen w-3/4 absolute top-0 right-0 z-20">
        <form action="" className="w-5/6">
          <div className="flex my-2">
            <label className="w-24">Amount :</label>
            <input
              type="number"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-44">Demand Draft No. :</label>
            <input
              type="number"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-24">Drawn on :</label>
            <input
              type="date"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-32"> in the bank of :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <br />
          <div className="flex my-2">
            <label className="w-16">Place :</label>
            <input
              type="text"
              className="w-1/2 p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
            <label className="w-16">Date :</label>
            <input
              type="date"
              className="w-1/4 p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label>Online Transaction details :</label>
          </div>
          <div className="flex my-2">
            <label className="w-16">Transaction ID/No. :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-16">Payment Date :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-16">Bank Account Holder Name :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-16">Payment Reciept :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-16">Date :</label>
            <input
              type="date"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex my-2">
            <label className="w-16">
              Account No. from which transfer was made :
            </label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border border-slate-500 rounded text-slate-100 focus:outline-none focus:border-slate-400"
            />
          </div>
          <button className="w-1/2 m-auto border border-slate-500 p-2 my-2 rounded hover:bg-slate-500 hover:text-slate-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
