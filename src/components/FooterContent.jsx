import React from "react";
import Logo from "../assets/LOGO.png";
import Twitter from "../assets/twitter x.svg";
import Discord from "../assets/discord.svg";
import Instagram from "../assets/instagram.svg";
import Medium from "../assets/medium.svg";
import Magnetic from "./Magnetic";
const FooterContent = () => {
  return (
    <div className="bg-exebeige h-[500px] lg:h-[300px] w-full relative max-h-[500px] lg:max-h-[300px]">
      <div className="flex flex-col sm:flex-row px-4 lg:px-25">
        <div className="flex-5/12">
          <div cla>
            <div className="flex items-center w-full justify-center">
              <img src={Logo} alt="" className="w-20  sm:w-15 lg:w-25" />
              <p className="hidden sm:block font-exe text-[16px] md:text-[20px]  lg:text-[30px] font-bold">
                The Executioners
              </p>
            </div>
          </div>
          <div className="w-full m-auto lg:px-25 flex gap-2 justify-center">
            <Magnetic>
              <div className="h-[50px] w-[50px] lg:h-[78px] lg:w-[78px] rounded-xl items-center flex justify-center -mt-1.5">
                <img
                  src={Twitter}
                  className="h-[47px] lg:h-[78px] w-[47px] lg:w-[78px]"
                />
              </div>
            </Magnetic>
            <Magnetic>
              <div className="bg-black h-[40px] w-[40px] lg:h-[66px] lg:w-[66px] rounded-md lg:rounded-xl items-center flex justify-center">
                <img
                  src={Instagram}
                  className="h-[25px] lg:h-[40px] lg:w-[40px]"
                />
              </div>
            </Magnetic>
            <Magnetic>
              <div className="bg-black h-[40px] w-[40px] lg:h-[66px] lg:w-[66px] rounded-md lg:rounded-xl items-center flex justify-center">
                <img
                  src={Medium}
                  className="h-[25px] lg:h-[40px] lg:w-[40px]"
                />
              </div>
            </Magnetic>
            <Magnetic>
              <div className="bg-black h-[40px] w-[40px] lg:h-[66px] lg:w-[66px] rounded-md lg:rounded-xl items-center flex justify-center">
                <img
                  src={Discord}
                  className="h-[25px] lg:h-[40px] lg:w-[40px]"
                />
              </div>
            </Magnetic>
          </div>
          <div className="w-full pl-10 lg:pl-24 mt-4 font-semibold flex  text-wrap items-center ">
            <p className="font-primary">
              <span>Mail us at: </span>
              <span className="font-bold">esportsexecutioners@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="flex-2/12 items-start pl-10 sm:pl-0 justify-start font-primary mt-4 lg:mt-8 flex flex-col">
          <div className="font-extrabold text-[20px] lg:text-[24px]">
            Quick Links
          </div>
          <div className="font-semibold lg:mt-4 text-[16px] lg:text-[18px]">
            <p className="hover:text-exered">Home</p>
            <p className="hover:text-exered">About</p>
            <p className="hover:text-exered">Merchandise</p>
            <p className="hover:text-exered">Events</p>
            <p className="hover:text-exered">Contact Us</p>
          </div>
        </div>
        <div className=" flex-6/12 flex justify-center font-primary mt-8 gap-20">
          <div className="hidden sm:block">
            <h1 className="font-extrabold text-[24px]">Legal Links</h1>
            <p className="font-semibold mt-4 text-[18px] hover:text-exered">
              Terms of Service
            </p>
            <p className="font-semibold text-[18px] hover:text-exered">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col -mt-6 sm:mt-0 items-start ">
            <h1 className="font-extrabold text-[20px] lg:text-[24px] pl-7 ">
              Stay Updated
            </h1>
            <div className="mt-2 lg:mt-5 w-75 h-12 rounded-3xl flex relative">
              <input
                type="text"
                className="bg-white w-full h-12 rounded-3xl pl-5 outline-none text-exered font-semibold"
                placeholder="Your Email Address"
              />
              <button className="absolute right-0 bg-exered text-exebeige h-12  rounded-3xl px-4 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-exered text-exebeige h-10 w-full text-center text-sm lg:text-xl font-bold pt-2 bottom-0 absolute">
        © 2025 The Executioners. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterContent;
