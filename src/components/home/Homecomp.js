import React, { Component } from "react";
import { Element } from "react-scroll";
import "./Homecomp.css";
import { Link } from "react-scroll";

const Homecomp = () => {
  return (
    <>
      <Element id="about-section" name="about-section">
        <main id="about-section">
          <section className="pb-20 bg-gray-300 -mt-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    HC ADVANT LIMITED
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    We are a Nigerian topnotch company that specializes in
                    providing excellent services in HR consultancy, Real estate
                    and emerging markets.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    Registered in Nigeria in 2008,HC ADVANT has remained
                    trailblazingly focused at meeting our clients need and
                    beyond.
                  </p>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-10">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block"
                        style={{
                          height: "95px",
                          top: "-94px",
                        }}
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-yellow-400 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1552581466-ac9fec8dd978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300">
                      <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">Our Virtue</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      Spanning over the years, with a successful streak of
                      excellence, our watchword of maintaining great integrity
                      while satisfying our clients remains our culture.
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <h4 className="text-gray-600 text-lg">
                              We are poised to doing the right things and doing
                              things right in making sure to that excellence is
                              commonplace with us always.
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Element>
    </>
  );
};

export default Homecomp;
