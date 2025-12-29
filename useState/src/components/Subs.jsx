import React from "react";

const Subs = ({ sub }) => {
  return (
    <div>
      <button
        onClick={() => {
          sub(prev => prev - 1);
        }}
        className="py-4 px-6 cursor-pointer text-white bg-green-600 rounded-2xl"
      >
        Decrement
      </button>
    </div>
  );
};

export default Subs;
