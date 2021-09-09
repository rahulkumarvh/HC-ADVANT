import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./sweetalert.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mailBody, setmailBody] = useState("");
  const [subject, setSubject] = useState("");

  const handleContactSubmit = (e) => {
    if (name === "" || email === "" || mailBody === "" || subject === "") {
      swal({
        title: "Please fill all the fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      return;
    }
    e.preventDefault();
    axios
      .post("https://technotask-demo.herokuapp.com/api/postcontactmail", {
        name,
        email,
        subject,
        mailBody,
      })
      .catch((err) => console.log(err));
    swal({
      title: "Email Sent Successfully!",
      text: "",
      icon: "success",
      buttons: {
        confirm: { text: "Okay", className: "sweet-warning" },
      },
    });
    setName("");
    setemail("");
    setmailBody("");
    setSubject("");
  };
  return (
    <>
      <div
        className="bg-center bg-cover main-img mb-5"
        style={{
          backgroundImage: `url("/assets/images/contactbanner.jpg")`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-600 bg-opacity-70">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black uppercase lg:text-3xl cursor-pointer">
              {/* Network <span className="text-blue-400 underline">Saas</span> */}
              {/* Contact Us */}
            </h1>
            {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auemail hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button> */}
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-semibold text-black uppercase lg:text-3xl">
        Get in Touch
      </h1>
      {/* <div className="h-32 bg-black md:-mt-28 md:visible invisible"></div> */}
      <div className="flex flex-wrap align-middle">
        <div className="lg:w-2/5 lg:mt-60 w-full">
          <div className="flex flex-col justify-items-center items-center align-middle lg:pl-8 lg:mt-0 mt-4 mx-3">
            <div className="md:text-2xl text-md text-black text-center">
              Looking for help? Fill in the form and one of our experts will get
              in touch with you.
            </div>
            <div className="inline-flex pt-6">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/145/145807.png"
                    alt="LinkedIn"
                    title="LinkedIn"
                  />
                </a>
              </div>
              {/* <div>
                <img
                  className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                  src="https://image.flaticon.com/icons/png/512/145/145812.png"
                  alt="Twitter"
                  title="Twitter"
                />
              </div>
              <div>
                <img
                  className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                  src="https://image.flaticon.com/icons/png/512/145/145802.png"
                  alt="Facebook"
                  title="Facebook"
                />
              </div> */}
              <div>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/1409/1409946.png"
                    alt="Instagram"
                    title="Instagram"
                  />
                </a>
              </div>
              {/* <div>
                <img
                  className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                  src="https://image.flaticon.com/icons/png/512/187/187209.png"
                  alt="YouTube"
                  title="YouTube"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 w-full">
          <section className="px-6 py-4 mx-auemail bg-white text-black rounded-md dark:bg-gray-800 mt-4">
            {/* <h2 className="text-3xl font-semibold text-center text-black dark:text-white">
              Get in Touch
            </h2> */}
            <p className="mt-3 text-center text-gray-700 dark:text-gray-400">
              {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
            </p>

            <div className="grid grid-cols-1 lg:gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/pBSSwrJuJEk88EFU6"
                className="flex flex-col items-center px-4 py-3 text-black rounded-md dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2">
                  Block O, Suite 01, Road 1,<br></br> Ikota Shopping
                  Complex,Victoria Garden City,<br></br> Lekki,Lagos, Nigeria.
                </span>
              </a>

              <a
                href="tel:+2348034937297"
                className="flex flex-col items-center px-4 py-3 text-black rounded-md dark:text-gray-800 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">01-4537709</span>
                <span className="mt-2">+234 803-493-7297</span>
              </a>

              <a
                href="mailto:contact@hcadvant.com"
                className="flex flex-col items-center px-4 py-3 text-black rounded-md dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2">contact@hcadvant.com</span>
              </a>
            </div>

            <div className="mt-6 ">
              <form onSubmit={handleContactSubmit}>
                <div className="items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      Name
                    </label>

                    <input
                      name="name"
                      id="name"
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      E-mail
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="-ml-2 pt-2">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      Subject
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      id="subject"
                      type="text"
                      name="subject"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                    Message
                  </label>

                  <textarea
                    onChange={(e) => setmailBody(e.target.value)}
                    value={mailBody}
                    name="mailBody"
                    id="mailBody"
                    className="block w-full h-40 px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  ></textarea>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
