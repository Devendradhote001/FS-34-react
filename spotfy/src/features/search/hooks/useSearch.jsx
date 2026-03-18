import { useState } from "react";
import { useSongs } from "../../../shared/hooks/getSongs";

export const useSearch = () => {
  let songs = useSongs();

  const [searchSongs, setSearchSongs] = useState([]);
  const [toggle, setToggle] = useState(false);

  let timer;

  let handleChange = (e) => {
    clearTimeout(timer);
    let searchText = e.target.value;

    timer = setTimeout(() => {
      if (searchText.length) {
        let res = songs.filter((elem) => {
          return elem.title.toLowerCase().includes(searchText.toLowerCase());
        });
        setSearchSongs(res);
      }
    }, 500);
  };

  return {
    handleChange,
    searchSongs,
    toggle,
    setToggle,
  };
};
