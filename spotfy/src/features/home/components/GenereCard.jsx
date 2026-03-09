import React from "react";
import { useNavigate } from "react-router";

const GenereCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`genre/${7}`)}
      className="h-[40%] p-2 flex flex-col transition duration-200 items-center gap-2 hover:bg-black/30 rounded-xl w-[22%] border cursor-pointer border-gray-600"
    >
      <div className="h-[75%]">
        <img
          className="h-full rounded-xl"
          src="https://i.scdn.co/image/ab67616d0000e1a38863bc11d2aa12b54f5aeb36"
          alt=""
        />
      </div>
      <div className="text-sm">
        <h1>Bollywood Rocking...</h1>
        <p>Atif aslam, Sonu Nigam...</p>
      </div>
    </div>
  );
};

export default GenereCard;
