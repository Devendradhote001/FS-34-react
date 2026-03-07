import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-white font-sans">
      {/* Spotify Logo */}
      <div className="mb-8">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="#1DB954"
          className="mx-auto"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.44 15.15c-.14.48-.48.88-.96.88-.19 0-.37-.06-.53-.16-.25-.16-.44-.43-.44-.82v-8.4c0-.23.07-.44.19-.6.2-.25.49-.35.78-.27l4.87 1.95c.53.21.88.75.88 1.34v5.92c0 .84-.66 1.52-1.49 1.52-.2 0-.4-.03-.58-.1zm-5.44 0c-.14.48-.48.88-.96.88-.19 0-.37-.06-.53-.16-.25-.16-.44-.43-.44-.82v-8.4c0-.23.07-.44.19-.6.2-.25.49-.35.78-.27l2.93 1.17c.53.21.88.75.88 1.34v5.72c0 .84-.66 1.52-1.49 1.52-.2 0-.4-.03-.58-.1z" />
        </svg>
      </div>

      {/* Welcome Back */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
        Welcome back
      </h1>

      {/* Email Input */}
      <div className="w-full max-w-md mb-4">
        <label className="block text-sm mb-2 text-gray-400">
          Email or username
        </label>
        <input
          type="text"
          className="w-full px-4 py-4 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50"
          placeholder="Email or username"
        />
      </div>

      {/* Continue Button */}
      <button className="w-full max-w-md bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-6 rounded-lg mb-6 transition-colors duration-200 shadow-lg hover:shadow-xl">
        Continue
      </button>

      {/* Or Divider */}
      <div className="w-full max-w-md flex items-center mb-6">
        <div className="flex-grow h-px bg-gray-800"></div>
        <span className="px-4 text-sm text-gray-500 font-medium">or</span>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>

      {/* Phone Continue */}
      <button className="w-full max-w-md flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white py-4 px-6 rounded-lg mb-3 transition-colors duration-200 font-medium">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39-0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Continue with phone number
      </button>

      {/* Social Buttons */}
      <div className="w-full max-w-md space-y-3 mb-8">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white py-4 px-6 rounded-lg transition-colors duration-200 font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23.99-3.71.99-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white py-4 px-6 rounded-lg transition-colors duration-200 font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Continue with Facebook
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white py-4 px-6 rounded-lg transition-colors duration-200 font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.06 2.97v-2.68c1.56-.37 2.53-1.64 2.82-3.29H12V9h5.2v1.25h-3.69v1.78h3.69v1.36c0 .99-.27 2.65-2.02 2.65h-2.32v2.31h3.96c.38 0 1.32-.16 1.78-.57.32-.29.54-.75.54-1.28v-1.35h-3.54V9h6.29V7.18h-6.29V.93h6.29A6.985 6.985 0 0024 7.16c0 4.18-2.48 5.32-2.29 5.34z" />
          </svg>
          Continue with Apple
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-500">
        Don't have an account?
        <a
          onClick={() => setToggle((prev) => !prev)}
          href="#"
          className="text-white font-medium ml-1 hover:underline"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
