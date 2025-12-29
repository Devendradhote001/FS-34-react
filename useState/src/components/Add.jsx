import React from "react";

const Add = ({ add }) => {
  return (
    <div>
      <button
        onClick={() => {
          add(prev => prev + 1);
        }}
        className="py-4 px-6 cursor-pointer text-white bg-blue-600 rounded-2xl"
      >
        Increment
      </button>
    </div>
  );
};

export default Add;
