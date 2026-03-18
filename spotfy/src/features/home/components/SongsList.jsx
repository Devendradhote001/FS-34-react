import React from "react";
import Table from "./songslist/Table";
import SongCard from "./songslist/SongCard";
import { useSongs } from "../../../shared/hooks/getSongs";


const SongsList = () => {
  let songs = useSongs();

  return (
    <div>
      <div>
        <Table />
      </div>
      <div>
        {songs.map((elem, index) => {
          return <SongCard index={index+1} key={index} elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default SongsList;
