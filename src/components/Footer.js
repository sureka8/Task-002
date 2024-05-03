import React from "react";
import image from "../image/images.png";
import footer from "../image/footer.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-800 h-auto text-white font-Arial">
      <div className="container md:mx-auto md:px-10">
        <div class=" flex md:flex-row flex-col justify-between items-center">
          <img src={footer} alt="Images" className="h-60" />
          <div className="flex flex-col space-y-5 px-5">
            <div className="flex flex-row space-x-5">
              <CiLocationOn className="text-primary md:text-3xl text-2xl" />
              <p className="font-bold">Find a branch or ATM</p>
            </div>
            <div className="bg-white rounded-full flex flex-row space-x-3 md:w-80 w-60 items-center p-2 text-black">
              <input
                type="text"
                placeholder="Enter address or postal code"
                className="text-xs  focus:outline-none w-full "
              />
              <IoIosSearch className="text-black" />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-slate-300">
          <div class=" grid grid-cols-1 md:grid-cols-3 gap-4 px-5 mt-3">
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li> Our Company</li>
                <li>Learn About Us</li>
                <li>Discover Special Offers</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col space-y-5">
                <li> Bank Accounts</li>
                <li>Personal Banking</li>
                <li>Business Banking</li>
                <li>Commercial</li>
                <li>Credit Cards</li>
                <li>Mortgages</li>
                <li>Lending</li>
                <li>Investments</li>
                <li>Insurance</li>
                <li>Ways to Bank</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col space-y-5">
                <li>Business Banking</li>
                <li>Commercial</li>
                <li>Corporate Profile</li>
                <li>Corporate Responsibility</li>
                <li>Investor Relations</li>
                <li>Media Centre</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8"><p>Solution By Xiteb</p></div>
      </div>
    </div>
  );
};

export default Footer;
