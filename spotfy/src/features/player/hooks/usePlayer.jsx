import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause } from "../state/playerSlice";

export const usePlayer = () => {
  const dispatch = useDispatch();
  let { currentSong, isPlaying } = useSelector((store) => store.player);
  console.log("play->", isPlaying);

  let audio = new Audio();
  useEffect(() => {
    if (currentSong && isPlaying) {
      audio.src = currentSong.url;
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.src = null;
    };
  }, [currentSong, isPlaying]);

  let handlePlayPause = () => {
    console.log("reached");
    dispatch(pause());
  };

  return { currentSong, handlePlayPause };
};
