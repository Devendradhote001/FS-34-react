import React, { useRef } from "react";
import { Play } from "lucide-react";

const MusicCard = ({ elem }) => {
  let audioRef = useRef();

  return (
    <div className="px-10 py-4 bg-white rounded-xl flex items-center justify-between">
      <div className="flex gap-10 items-center">
        <img
          width={100}
          src="https://i.pinimg.com/originals/0f/d8/57/0fd8577fe8c1c38f28280f9cc3e8d237.jpg"
          alt=""
        />
        <h1 className="text-3xl font-semibold">{elem.name}</h1>
      </div>
      <button
        onClick={() => audioRef.current.play()}
        className="p-6 bg-black rounded-full text-white cursor-pointer"
      >
        <Play size={30} />
      </button>
      <audio ref={audioRef} src={elem.Path}></audio>
    </div>
  );
};

export default MusicCard;
