import React from "react";
import ProductComponent from "./ProductComponent";
import ProductData from "./ProductData";
// import NumberCard from "./NumberCard";
import { Link } from "react-router-dom";
function Products() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div
          className="inset-0 h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/productsbackbanner.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-black bg-opacity-80"></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div
            className="shadow-2xl rounded-lg w-4/5 h-92 bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/images/productsbanner.jpg')`,
            }}
          >
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4 border-gray-400 py-20 px-5 mx-2">
                  <p className="italic text-white text-xl sm:text-3xl md:text-2xl lg:text-4xl uppercase text-center  font-semibold pt-6 ">
                    {ProductData.map((product) =>
                      product.featured ? (
                        <div key={product._id} className="md:mt-10 mt-2">
                          <p>{product.title}</p>
                        </div>
                      ) : null
                    )}
                  </p>
                </div>

                <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className="relative bg-black h-full md:h-96 w-full bg-opacity-30 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <div className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      {ProductData.map((product) =>
                        product.featured ? (
                          <div
                            key={product._id}
                            className="md:mt-10 mt-2 uppercase"
                          >
                            <p>{product.title}</p>
                          </div>
                        ) : null
                      )}
                      {ProductData.map((product) =>
                        product.featured ? (
                          <div key={product._id} className="md:mt-10 mt-2">
                            <p className="text-sm">{product.description1}</p>
                          </div>
                        ) : null
                      )}
                    </div>
                    <div className="bottom-0 absolute p-2 right-0">
                      <Link to="/software/featured">
                        <button
                          onClick={scrollToTop}
                          className="opacity-75 bg-white text-black hover:bg-white hover:text-black text-sm font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-black">LEARN MORE</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center md:pt-16 pt-4">
          <div className="md:w-1/3 w-full my-6">
            <div className="flex flex-col justify-center items-center align-middle bg-white rounded-lg lg:mx-24 md:mx-12 mx-24">
              <div>
                <img
                  src="https://image.flaticon.com/icons/png/512/1336/1336494.png"
                  alt="Web Development"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <p className="md:text-2xl text-md font-bold text-black text-center">
                  Web
                  <br /> Development
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full my-6">
            <div className="flex flex-col justify-center items-center align-middle bg-white rounded-lg lg:mx-24 md:mx-12 mx-24">
              <div>
                <img
                  src="https://image.flaticon.com/icons/png/512/897/897219.png"
                  alt="Artificial Intelligence"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <p className="md:text-2xl text-md font-bold text-black text-center">
                  Artificial <br /> Intelligence
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full my-6">
            <div className="flex flex-col justify-center items-center align-middle bg-white rounded-lg lg:mx-24 md:mx-12 mx-24">
              <div>
                <img
                  src="https://image.flaticon.com/icons/png/512/2808/2808516.png"
                  alt="Internet of Things"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <p className="md:text-2xl text-md font-bold text-black text-center">
                  Internet Of <br />
                  Things
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-20 lg:mt-16">
        <div className="ld:w-2/5 flex lg:justify-center text-4xl mt-10 font-bold pl-6">
          Our Softwares
        </div>

        <div className="flex flex-wrap mt-16 mx-6">
          {ProductData.map((product) => (
            <ProductComponent product={product} key={product._id} />
          ))}
        </div>
      </section>
      {/* <div className="flex md:flex-row-reverse flex-wrap md:m-20 md:mt-8 my-10 mx-3">
        <div className="xl:w-3/5 w-full text-sm md:text-lg md:leading-loose leading-relaxed xl:pl-7">
          In this pandemic, corporate world and institutions, all are adapting
          to the new normal and while getting back to full-on work mode, the
          need of safety is of utter priority and to address that, the EnR team
          has come up with a reliable, cost-friendly, and a smart solution i.e.
          Smart Mask Detection. The main focus of this solution is to detect, if
          a person is wearing a mask or not. Rather than employing some security
          person for manually checking for mask and temperature using some
          temperature gun, we have come up with an automated solution. As in the
          former case, there is a risk of that security person being infected
          and thus making the condition even worse.
        </div>
        <div className="xl:w-2/5 w-full object-fill lg:m-0 mt-8 ">
          <iframe
            className="w-full xl:h-full lg:h-72 h-56 rounded-md shadow-lg"
            src="https://www.youtube.com/embed/_oA0PvQ7AOQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}

export default Products;
