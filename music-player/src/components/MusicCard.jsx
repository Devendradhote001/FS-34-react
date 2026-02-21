import React, { useContext, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { MySong } from "../MyContext";

const MusicCard = ({ elem }) => {
  let { setCurrSong, currSong, audioRef, isPlaying, setIsPlaying } =
    useContext(MySong);

  useEffect(() => {
    if (!currSong) return;
    audioRef.current.src = currSong.Path;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currSong, isPlaying]);

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

      {currSong?.name === elem.name && isPlaying ? (
        <button
          onClick={() => {
            setIsPlaying(false);
          }}
          className="p-6 bg-black rounded-full text-white cursor-pointer"
        >
          <Pause size={30} />
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrSong(elem);
            setIsPlaying(true);
          }}
          className="p-6 bg-black rounded-full text-white cursor-pointer"
        >
          <Play size={30} />
        </button>
      )}

      <audio ref={audioRef} src={elem.Path}></audio>
    </div>
  );
};

export default MusicCard;
