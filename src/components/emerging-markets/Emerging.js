import React from "react";
import "./Emerging.css";
import b1 from "../../images/b1.jpeg";
import b2 from "../../images/b2.jpeg";

const Emerging = () => {
  return (
    <>
      <section class="flex items-center justify-center h-80 bg-gray-800 pt-32 pb-32">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
            Emerging Markets
          </h2>
        </div>
      </section>
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
              Lorem ipsum dolor{" "}
            </h2>
            <p class="max-w-lg mt-4 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
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
