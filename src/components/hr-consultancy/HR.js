import React from "react";

const HR = () => {
  return (
    <>
      <main id="top">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/9480118/pexels-photo-9480118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    HR-CONSULTANCY
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4 pt-32 pb-32">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/5922212/pexels-photo-5922212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">What we offer</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We provide an end to end HR consultancy which cuts across divers
                spheres. From policy development, recruitment, contract
                staffing; performance management systems, employee engagement,
                training and development; and HR statutory compliances, talent
                management and our overall human capital management services, we
                are set to making sure that your organization is far bettered
                through the HR outlook.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HR;
