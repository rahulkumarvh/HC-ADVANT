import React from "react";
import "./Emerging.css";
import b1 from "../../images/b1.jpeg";
import b2 from "../../images/b2.jpeg";

const Emerging = () => {
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
                "url('https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
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
                    Emerging Markets
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
          <div class="md:w-2/3">
            <div class="hidden md:flex md:items-center md:space-x-10">
              <img
                class="object-cover object-center rounded-md shadow w-72 h-72"
                src={b2}
              ></img>
              <img
                class="object-cover object-center w-64 rounded-md shadow h-96"
                src="https://images.pexels.com/photos/4427908/pexels-photo-4427908.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              ></img>
            </div>
            <h2 class="text-3xl font-semibold text-gray-800 md:mt-6">
              Emerging Markets{" "}
            </h2>
            <p class="max-w-lg mt-4 text-gray-600">
              We partner with the international companies and local ones alike
              into providing very viable soft landing business services that is
              all weathered and bound to succeed; especially in the areas of new
              businesses and frontiers.
            </p>
          </div>
          <div class="md:w-1/3">
            <img
              class="object-cover object-center w-full rounded-md shadow h-96"
              src="https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5439381.jpg&fm=jpg"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emerging;
