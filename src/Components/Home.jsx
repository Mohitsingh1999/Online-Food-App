import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] text-center z-10">
          <p className="text-2xl lg:text-6xl py-5 font-bold z-10">Zosh Foods</p>
          <p className="text-2xl lg:text-4xl font-bold z-10 text-gray-300">
            Taste the convenience:Food, Fast and delivered
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout absolute top-0 left-0 right-0"></div>
      </section>
    </div>
  );
};

export default Home;
