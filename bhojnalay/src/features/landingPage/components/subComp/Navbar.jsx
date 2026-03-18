import React from "react";

const Navbar = () => {
  return (
    <div className="h-[16%] w-full flex px-[10%] items-center justify-between">
      <div className="h-[40%]">
        <img
          className="h-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt=""
        />
      </div>

      <div className="flex gap-5 font-semibold items-center">
        <p>Swiggy corporate</p>
        <p>Partner with us</p>
        <div className="flex gap-5">
          <button className="border border-white px-5 py-3 rounded-xl">
            Get the App
          </button>
          <button className="bg-black text-white px-7 py-3 rounded-xl">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
