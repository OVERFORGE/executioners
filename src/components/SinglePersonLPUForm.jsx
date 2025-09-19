import React, { useContext, useEffect, useRef, useState } from "react";
import { useSectionContextValues } from "../context/SectionContext";
import axios from "axios";
import { toast } from "sonner";
const SinglePersonLPUForm = () => {
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
    <div>
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
  );
};

export default SinglePersonLPUForm;
