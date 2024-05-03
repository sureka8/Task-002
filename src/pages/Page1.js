import React from "react";
import { PiBankLight } from "react-icons/pi";
import { PiCalendarMinus } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Page1 = () => {
  return (
    <div className="container mx-auto mt-10 md:px-20 px-10 py-10">
      <h2 className="text-2xl font-semibold px-5">Why bank with HSBC?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:px-5 px-1">
        <div className=" p-5">
          <div className="flex md:flex-row flex-col items-center  space-x-5 ">
            <PiBankLight className="text-7xl  text-primary" />
            <p className="text-lg">
              As one of Sri Lanka's largest banking networks,We're easy to find.
            </p>
          </div>
        </div>

        <div className=" p-5">
          <div className="flex md:flex-row flex-col items-center  space-x-5 ">
            <PiCalendarMinus className="text-6xl text-primary" />
            <p className="text-lg">
              Meet with us for advice on selecting the right account for you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-10 md:px-5 px-1">
        <div className=" p-5">
          <div className="flex md:flex-row flex-col items-center  space-x-5 ">
            <PiClock className="text-6xl text-primary" />
            <p className="text-lg">
              Get a free credit score instantly with our HSBC Mobile App.
            </p>
          </div>
        </div>

        <div className=" p-5">
          <div className="flex md:flex-row flex-col items-center  space-x-5 ">
            <BiMessageDetail className="text-6xl text-primary" />
            <p className="text-lg">
              Meet with us for advice on selecting the right account for you.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold px-5 mt-10">Popular Services</h2>
      <div className="flex md:flex-row flex-col mt-10 justify-around">
        <div className="flex flex-col space-y-5 items-center">
          <img
            src="https://www.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/cards/credit-card-256x256.svg"
            alt="d"
            className="h-20 w-20"
          />
          <div className="flex flex-row  text-primary items-center space-x-2 text-lg">
            <a href="#">Cards </a>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
        <div className="flex flex-col space-y-5 items-center">
          <img
            src="https://www.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/mortgage/mortgage-256x256.svg"
            className="h-20 w-20"
            alt="image2"
          />
          <div className="flex flex-row text-primary items-center space-x-2 text-lg">
            <a href="#">Buying a Home</a>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
        <div className="flex flex-col space-y-5 items-center ">
          <img
            src="https://private-wealth.us.cibc.com/documents/10184/10602/Icon-Dollar-Bills-3.png/2ef7f3cc-a917-7e16-7987-26b0c04bf206?t=1620313645581"
            className="h-20 w-20"
            alt="image3"
          />
          <div className="flex flex-row text-primary items-center space-x-2 text-lg">
            <a href="#">Line of Credit </a>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
        <div className="flex flex-col space-y-5 items-center">
          <img
            src="https://www.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/professions/students-256x256.svg"
            className="h-20 w-20"
            alt="image4"
          />
          <div className="flex flex-row text-primary items-center space-x-2 text-lg">
            <a href="#">Student Banking</a>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
