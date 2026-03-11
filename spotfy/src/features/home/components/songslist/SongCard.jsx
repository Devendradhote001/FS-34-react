import React from "react";
import { useHome } from "../../hooks/useHome";

const SongCard = ({ elem, index }) => {
  let {  addSong } = useHome();

  return (
    <div onClick={() => addSong(elem)} className="flex gap-4 cursor-pointer">
      <p>{index}</p>
      <div className="flex gap-4">
        <div>
          <img width={40} src={elem.thumbnail} alt="" />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
