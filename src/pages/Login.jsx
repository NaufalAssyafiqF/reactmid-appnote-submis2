import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { login, putAccessToken } from "../utils/fetch-data";
import useInput from "../hooks/useInput";

const Login = () => {
  const [emailValue, emailValueHandler] = useInput("");
  const [passwordValue, passwordValueHandler] = useInput("");

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const reqBody = {
      email: emailValue,
      password: passwordValue,
    };

    const getData = await login(reqBody);
    
    if (getData.error === false) {
      putAccessToken(getData.data.accessToken);
      navigate("/");
    }
  };

  return (
    <div className="mx-20 pb-20">
      <Header />
      <div className="max-w-[90%] mx-auto h-fit flex flex-col items-start  rounded-lg">
        <div
          className={`flex items-center rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1 bg-[#8BD3DD] `}
        >
          <p className="text-black font-comfortaa font-medium text-lg px-2 py-3">
            Login to Use App
          </p>
        </div>
        <div
          className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-5 pt-4 pb-12 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
          style={{ borderRadius: "0px 5px 5px 5px" }}
        >
          <form
            action=""
            className="w-[90%] mx-auto"
            onSubmit={onSubmitHandler}
          >
            <input
              type="email"
              className="w-full bg-[#D9D9D9] border-b-4 p-2 focus:outline-none placeholder:text-black placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium  border-black mt-10"
              placeholder="Enter Your email..."
              onChange={emailValueHandler}
            />
            <input
              type="password"
              className="w-full bg-[#D9D9D9] border-b-4 p-2 focus:outline-none placeholder:text-black placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium  border-black mt-10"
              placeholder="Enter Your password..."
              onChange={passwordValueHandler}
            />
            <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="text-black text-2xl px-6 py-3 bg-[#8BD3DD] hover:bg-[#7aeffff3] font-mono font-medium rounded-lg border-2 border-black  transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                Login
              </button>
            </div>
            <div className="mt-10 text-base font-medium">
              <p>
                Don't Have an Account ?{" "}
                <Link to="/register" className="text-[#6f6f6f] ml-2 underline">
                  register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
