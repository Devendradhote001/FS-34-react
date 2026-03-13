import { useEffect } from "react";
import { useSelector } from "react-redux";

export const usePlayer = () => {
  let { currentSong, isPlaying } = useSelector((store) => store.player);

  useEffect(() => {
    let audio = new Audio();

    if (currentSong) {
      audio.src = currentSong.url;
      audio.play();
      console.log(currentSong);
    }

    return () => {
      audio.src = null;
    };
  }, [currentSong]);

  return currentSong || "hello";
};
