import React from "react";
import CountTo from "react-count-to";
import "./cards.css";

function NumberCard({ value, text }) {
  const fn = (value) => <span>{value}</span>;
  return (
    <div className="bg-black text-white box-css z-10 py-6 rounded-md px-4 flex flex-col justify-center shadow-lg">
      <div className="lg:text-9xl text-5xl font-bold flex justify-center ">
        <div>
          <CountTo to={value} speed={4000}>
            {fn}
          </CountTo>
        </div>
      </div>
      <div className="font-bold font-sans flex justify-center text-center md:text-2xl text-lg">
        {text}
      </div>
    </div>
  );
}

export default NumberCard;
