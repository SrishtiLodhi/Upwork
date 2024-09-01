import React, { useState } from "react";
import google from "../assets/google.svg";
import apple from "../assets/apple.png";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      onLogin();
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-sans items-center border border-gray-400 px-20 shadow-md rounded-lg w-full max-w-md p-6"
      >
        <h3 className="text-3xl font-medium font-sans mb-4">Log in to Upwork</h3>
        <div className="relative flex flex-col w-full mb-4">
          <input
            type="email"
            id="username"
            onChange={handleChangeInput}
            value={email}
            placeholder="Username or Email"
            className="p-2 rounded-lg border border-gray-300 text-sm outline-none"
          />
        </div>
        {/* Password input code commented out */}
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-full rounded-xl text-white bg-green-700 p-2 text-lg ${
            loading ? "bg-gray-500 cursor-not-allowed" : "cursor-pointer"
          } `}
          disabled={loading}
        >
          {loading ? "Loading..." : "Log In"}
        </button>
        <div className="flex justify-center items-center my-5 text-sm font-light">
          <div className="w-[160px] h-[1px] bg-gray-300 shadow-sm rounded-md md:w-[120px]"></div>
          <span className="mx-2 text-gray-300">or</span>
          <div className="w-[160px] h-[1px] bg-gray-300 shadow-sm rounded-md md:w-[120px]"></div>
        </div>
        <button className="flex w-full items-center justify-center p-2 bg-white border border-gray-300 rounded-xl text-gray-700">
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
        <button className="flex items-center w-full justify-center p-2 bg-white border border-gray-300 rounded-xl mt-5 text-gray-700">
          <img src={apple} alt="Apple" className="w-5 h-5 mr-2" />
          Continue with Apple
        </button>
        <div className="text-gray-400 my-5">Don’t have a Freelance account?</div>
        <a href="/signup" className="text-green-700">
          Sign Up now
        </a>
      </form>
    </div>
  );
}

export default Login;
