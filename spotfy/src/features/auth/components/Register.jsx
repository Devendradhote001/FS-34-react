import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
      <div className="w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            alt="spotify"
            className="w-10"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 leading-tight">
          Sign up to <br /> start listening
        </h1>

        {/* Email input */}
        <div className="mb-3">
          <label className="block text-sm mb-2">Email address</label>
          <input
            type="email"
            placeholder="name@domain.com"
            className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-white outline-none"
          />
        </div>

        {/* Phone link */}
        <p className="text-green-500 text-sm mb-6 cursor-pointer hover:underline">
          Use phone number instead.
        </p>

        {/* Next button */}
        <button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-full mb-6">
          Next
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google button */}
        <button className="w-full border border-gray-500 py-3 rounded-full flex items-center justify-center gap-3 mb-4 hover:border-white">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
            alt="google"
          />
          Sign up with Google
        </button>

        {/* Apple button */}
        <button className="w-full border border-gray-500 py-3 rounded-full flex items-center justify-center gap-3 mb-8 hover:border-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            className="w-5 invert"
            alt="apple"
          />
          Sign up with Apple
        </button>

        {/* Login link */}
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-white font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
