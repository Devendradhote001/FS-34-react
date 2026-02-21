import { createContext, useRef, useState } from "react";

export let MySong = createContext();

export const SongsProvider = ({ children }) => {
  const [currSong, setCurrSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  let audioRef = useRef();

  return (
    <MySong.Provider
      value={{ currSong, setCurrSong, isPlaying, audioRef, setIsPlaying }}
    >
      {children}
    </MySong.Provider>
  );
};
