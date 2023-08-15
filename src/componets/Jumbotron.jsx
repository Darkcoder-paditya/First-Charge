import React from "react";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";

function Jumbotron() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('./assets/jumbobg.svg')]  bg-blend-multiply">
      <Navbar/>
      <div className=" px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
        <h1 className=" py-24 mb-4 text-4xl  tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          YOUR EV CHARGING PATTERN,
        </h1>
        <p className=" mb-8 text-lg  text-black lg:text-xl sm:px-16 lg:px-48">
          EVERYWHERE YOU IMAGINE
        </p>
        <button class="bg-green-500 hover:bg-green-400 text-white  py-2 px-8 ">
            Get Quotes
          </button>
      </div>
    </section>
  );
}

export default Jumbotron;
