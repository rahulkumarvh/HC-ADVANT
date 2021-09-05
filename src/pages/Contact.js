import React from "react";
import { GrInstagram, GrFacebook, GrTwitter } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="font-sans">
      <h1 className="py-8 text-5xl text-center font-light">Contact Us</h1>
      <div className="px-2 bg-pink-100 flex flex-col justify-around items-center md:flex-row md:px-6 ">
        <div className="py-8 text-2xl text-center font-light">
          <h1 className="font-semibold">Mail us at:</h1>
          <p className="text-grey-500">info@technotask.co.in</p>
        </div>
        <div className="py-8 text-2xl text-center font-light">
          <h1 className="font-semibold">Contact Us:</h1>
          <p className="text-grey-500">+91 94330 32220</p>
        </div>
      </div>
      <div className="p-6 bg-pink-200 flex flex-col justify-center items-center md:flex-row md:p-2">
        <div className="w-full md:w-2/5">
          <h1 className="w-full text-2xl text-center mb-5">
            Looking for help? Fill in the form and one of our experts will get
            in emailuch with you.
          </h1>
          <div className="flex justify-center items-center">
            <div className=" m-2 cursor-pointer hover:text-red-500">
              <GrInstagram size={42} />
            </div>
            <div className="m-2 cursor-pointer hover:text-blue-500">
              <GrFacebook size={42} />
            </div>
            <div className="m-2 cursor-pointer hover:text-blue-500">
              <GrTwitter size={42} />
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:p-6 md:w-3/5">
          <form action="">
            <div className="w-full p-2 md:px-6">
              {" "}
              <label className="pr-2" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                name="name"
              />
            </div>
            <div className=" w-full p-2 md:px-6">
              {" "}
              <label className="pr-2" htmlFor="email">
                E-Mail:
              </label>
              <input
                className=" w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="email"
                name="email"
              />
            </div>
            <div className=" w-full p-2 md:px-6">
              {" "}
              <label className="pr-2" htmlFor="subject">
                Subject:
              </label>
              <input
                className=" w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                name="subject"
              />
            </div>
            <div className=" w-full p-2 md:px-6">
              {" "}
              <label className="pr-2" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                className=" w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <input
                className="px-12 py-2 font-semibold rounded-xl border bg-pink-300 hover:bg-purple-400 transition-colors"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
