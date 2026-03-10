import React, { useEffect, useRef } from "react";

const SongCard = ({ elem, index }) => {
  let audioRef = useRef();

  return (
    <div
      onClick={() => audioRef.current.play()}
      className="flex gap-4 cursor-pointer"
    >
      <p>{index}</p>
      <div className="flex gap-4">
        <div>
          <img width={40} src={elem.thumbnail} alt="" />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>Artist</p>
        </div>
        <audio ref={audioRef} src={elem.url}></audio>
      </div>
    </div>
  );
};

export default SongCard;
