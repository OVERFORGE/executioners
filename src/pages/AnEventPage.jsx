import React, { useContext, useEffect, useRef, useState } from "react";
import Curve from "../components/Layout/Curve";
import PageNotFound from "../components/PageNotFound";
import A4 from "../assets/A4.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { NavLink } from "react-router-dom";
import { useSectionContextValues } from "../context/SectionContext";
import axios from "axios";
import { div } from "framer-motion/m";
import { toast } from "sonner";

const AnEventPage = () => {
  const { values } = useSectionContextValues();
  const [data, setData] = useState({
    name: "",
    email: "",
    regno: "",
    phone: "",
    section: "",
    rollno: "",
    twitterid: "",
  });
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [regnoEmpty, setRegnoEmpty] = useState(true);
  const [phoneEmpty, setPhoneEmpty] = useState(true);
  const [sectionEmpty, setSectionEmpty] = useState(true);
  const [rollnoEmpty, setRollnoEmpty] = useState(true);
  const [twitteridEmpty, setTwitteridEmpty] = useState(true);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    if (data.name === "") setNameEmpty(true);
    if (data.email === "") setEmailEmpty(true);
    if (data.regno === "") setRegnoEmpty(true);
    if (data.phone === "") setPhoneEmpty(true);
    if (data.section === "") setSectionEmpty(true);
    if (data.rollno === "") setRollnoEmpty(true);
    if (data.twitterid === "") setTwitteridEmpty(true);
    if (data.name !== "") setNameEmpty(false);
    if (data.email !== "") setEmailEmpty(false);
    if (data.regno !== "") setRegnoEmpty(false);
    if (data.phone !== "") setPhoneEmpty(false);
    if (data.section !== "") setSectionEmpty(false);
    if (data.rollno !== "") setRollnoEmpty(false);
    if (data.twitterid !== "") setTwitteridEmpty(false);
  }, [data]);

  const onRegister = async (event) => {
    event.preventDefault();

    console.log(values.backendUrl);

    let newurl = values.backendUrl + "/api/v1/registration";
    console.log(newurl);
    const response = await axios.post(newurl, data);
    if (response.data.success) {
      toast(response.data.message);
      if (response.data.message === "Registration successful") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("regno").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("section").value = "";
        document.getElementById("rollno").value = "";
        document.getElementById("twitterid").value = "";
        data.name = "";
        data.email = "";
        data.regno = "";
        data.phone = "";
        data.section = "";
        data.rollno = "";
        data.twitterid = "";
        setNameEmpty(true);
        setSectionEmpty(true);
        setRegnoEmpty(true);
        setEmailEmpty(true);
        setRollnoEmpty(true);
        setPhoneEmpty(true);
        setTwitteridEmpty(true);
      }
    }
  };
  return (
    <Curve>
      <div className="an-event relative ">
        <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full pb-10">
          <div className="m-auto w-full flex justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-exered">
            Stellar WEB3 Workshop
          </div>
          <div className="flex flex-col sm:flex-row relative ">
            <div
              style={{ perspective: 2000 }}
              className="flex-3/12 p-10 relative rounded-lg "
            >
              <div className="event-card-container relative rounded-lg">
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <div className="event-card-holder p-4 rounded-lg">
                    <img
                      style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                      }}
                      src={A4}
                      className="w-full rounded-lg"
                      alt=""
                    />
                  </div>
                </Atropos>
              </div>
            </div>
            <div className="flex-7/12 sm:p-10 w-full">
              <p className="text-exebeige text-3xl sm:text-4xl font-bold px-5 pt-5">
                Registration Form
              </p>
              <p className="px-5 pb-5 pt-4 font-md font-primary font-semibold text-exebeige">
                Don't just watch—be a part of the action! Register now and make
                your mark!
              </p>
              <form
                onSubmit={onRegister}
                className="bg-exered/10 w-full p-5 rounded-md registration-form pointer-events-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3 mt-3 mb-15">
                  <div className="flex-2 group bg-exebeige/90 relative rounded-sm">
                    {nameEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Name
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="name"
                      onChange={onChangeHandler}
                      value={data.name}
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex-1 group bg-exebeige relative rounded-sm">
                    {sectionEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Section
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="section"
                      onChange={onChangeHandler}
                      value={data.section}
                      id="section"
                      required
                    />
                  </div>
                  <div className="flex-1 bg-exebeige group relative rounded-sm">
                    {regnoEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Registration Number
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="regno"
                      onChange={onChangeHandler}
                      value={data.regno}
                      id="regno"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row  mt-3 mb-15">
                  <div className="flex-1 group bg-exebeige/90 relative rounded-sm">
                    {emailEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Email
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="email"
                      onChange={onChangeHandler}
                      value={data.email}
                      id="email"
                      required
                    />
                  </div>
                  <div className="flex-1 group bg-exebeige relative rounded-sm">
                    {rollnoEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Roll number
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="rollno"
                      onChange={onChangeHandler}
                      value={data.rollno}
                      id="rollno"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row  mt-3 mb-10">
                  <div className="flex-1 group bg-exebeige/90 relative rounded-sm">
                    {phoneEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Phone Number
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="phone"
                      onChange={onChangeHandler}
                      value={data.phpone}
                      id="phone"
                      required
                    />
                  </div>
                  <div className="flex-1 group bg-exebeige relative rounded-sm">
                    {twitteridEmpty ? (
                      <>
                        <label
                          htmlFor=""
                          className="absolute top-2 px-2 group-hover:-top-6 text-exered/90 group-hover:text-exebeige/90 transition-all duration-300 ease-linear rounded-md"
                        >
                          Twitter Id
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    <input
                      type="text"
                      className="w-full p-2 outline-none rounded-md text-exered/90 font-normal"
                      name="twitterid"
                      onChange={onChangeHandler}
                      value={data.twitterid}
                      id="twitterid"
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <button className="px-4 py-2 rounded-md bg-exered text-exebeige font-bold">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex-7/12 sm:p-10 w-full">
            <div className="event-card">
              <p className="text-exebeige text-3xl sm:text-4xl font-bold p-5">
                About the event
              </p>
              <p className="text-exebeige sm:text-xl font-bold p-5">
                <span className="text-exered">
                  Learn Blockchain from Scratch{" "}
                </span>{" "}
                - Whether you're a beginner or curious about Web3, we'll break
                down blockchain fundamentals and how decentralized technologies
                are shaping the future.
              </p>
              <p className="text-exebeige sm:text-xl font-bold p-5">
                <span className="text-exered">
                  Explore High-Paying Web3 Careers
                </span>{" "}
                - Discover both tech and non-tech opportunities in Web3. From
                developers (across multiple languages) to content creators,
                KOLs, ambassador programs, and marketing roles—there's a place
                for everyone in the decentralized world!
              </p>
              <p className="text-exebeige sm:text-xl font-bold p-5">
                <span className="text-exered">
                  Exclusive Session with Stellar’s Ambassador
                </span>{" "}
                - Gain insights into Stellar, its impact in blockchain, and how
                you can become an ambassador. Plus, learn about Stellar’s
                $15,000 developer grant program—even YOU can earn it with a
                great project!
              </p>
              <p className="text-exebeige sm:text-xl font-bold p-5">
                <span className="text-exered">Free Merchandise for All!</span> -
                Walk away with exclusive Stellar swag. All you have to do?
                Capture the event’s best moments, tweet using our pre-filled
                template, and hit post!
              </p>
              <p className="text-exebeige sm:text-xl font-bold p-5">
                <span className="text-exered">Claim Your Free NFT</span> - Bring
                two followers and follow our pages to earn an exclusive NFT,
                marking your participation in this Web3 journey!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-fix h-[300vh] sm:h-[120vh] -mt-[300vh] sm:-mt-[120vh]"></div>
      </div>
    </Curve>
  );
};

export default AnEventPage;
