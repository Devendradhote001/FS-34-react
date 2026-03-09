import React from "react";

const SongCard = ({ elem, index }) => {
  return (
    <div className="flex gap-3">
      <p>{index}</p>
      <div className="flex gap-2">
        <div>
          <img width={30} src={elem.thumbnail} alt="" />
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
