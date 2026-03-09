import React from "react";
import { Bell, House, User } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-full flex items-center  justify-between px-4">
      <div className="h-10 w-10">
        <img
          className="h-full w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/250px-Spotify_logo_without_text.svg.png"
          alt=""
        />
      </div>
      <div className="flex gap-4 items-center w-[30%]">
        <div className="h-12 w-12 rounded-full cursor-pointer flex items-center justify-center border border-gray-400">
          <House size={24} />
        </div>
        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <Bell />
        <div className="h-12 w-12 cursor-pointer rounded-full cursor-pointer flex items-center justify-center bg-black">
          <User color="white" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
