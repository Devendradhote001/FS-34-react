import { useEffect } from "react";
import { useSelector } from "react-redux";

export const usePlayer = () => {
  let { currentSong, isPlaying } = useSelector((store) => store.player);
  let audio = new Audio(currentSong?.url);

  useEffect(() => {
    if (currentSong) {
      audio.play();
      console.log(currentSong);
    }
  }, [currentSong]);

  return currentSong || "hello";
};
