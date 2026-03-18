import React from "react";
import { useParams } from "react-router";
import SongsList from "../components/SongsList";
import { useSongs } from "../../../shared/hooks/getSongs";

const GenreDetail = () => {
  let { id } = useParams();
  let songs = useSongs();

  return (
    <div className="flex flex-col gap-4">
      <h1>genre detail</h1>

      <div>
        <SongsList />
      </div>
    </div>
  );
};

export default GenreDetail;
