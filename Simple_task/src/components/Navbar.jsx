import React from "react";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <div className="h-[10%] rounded-xl justify-between px-10 flex items-center shadow-xl">
      <div className="h-[70%]">
        <img
          className="h-full"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
      </div>
      <div className="flex gap-10 items-center text-2xl font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="border rounded-xl px-5 py-3 cursor-pointer text-xl"
      >
        {toggle ? "Show User" : "Add User"}
      </button>
    </div>
  );
};

export default Navbar;
