import React from "react";
import logo from "../assets/car.svg";
import { useState } from "react";
import si from "../assets/si.svg";

function Navbar() {
  const [toggle, setToggle] = useState(0);
  const openmenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav className=" border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://google.com/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="First Charge Logo" />
          <span className="self-center text-2xl whitespace-nowrap text-green-400 ">
            First Charge
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div class=" justify-start space-x-12 hidden w-full md:block md:w-auto ">
          <a href="/home">
            <button class=" text-white hover:text-green-400">Home</button>
          </a>

          <a href="/aboutus">
            <button class=" text-white hover:text-green-400">About Us</button>
          </a>
          <a href="/services">
            <button class=" text-white hover:text-green-400">Services</button>
          </a>
          <a href="/reviews">
            <button class=" text-white hover:text-green-400">Reviews</button>
          </a>
          <a href="/faqs">
            <button class=" text-white hover:text-green-400">FAQ's</button>
          </a>
          <a href="/contactus">
            <button class=" text-white hover:text-green-400">Contact Us</button>
          </a>
        </div>
        <div class="space-x-10 hidden w-full md:block md:w-auto">
          <button>
            <img src={si} alt="SearchButton" />
          </button>
          <button class="bg-green-500 hover:bg-green-400 text-white  py-2 px-8 ">
            Get Quotes
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
