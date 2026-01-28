import React from "react";
import { useContext } from "react";
import { MyStore } from "../MyContext";

const Navigation = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="p-5 flex flex-col gap-5">
      <button
        onClick={() => setToggle(true)}
        className="w-full rounded-xl cursor-pointer py-3 bg-black text-white"
      >
        Create
      </button>
      <button
        onClick={() => setToggle(false)}
        className="w-full py-3 rounded-xl cursor-pointer bg-black text-white"
      >
        Products
      </button>
      <button className="w-full py-3 rounded-xl cursor-pointer bg-black text-white">
        Carts
      </button>
    </div>
  );
};

export default Navigation;
