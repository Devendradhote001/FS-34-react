import React from "react";
import TimeLine from "./TimeLine";
import Controls from "./Controls";
import { usePlayer } from "../hooks/usePlayer";

const Player = () => {
  let { currentSong } = usePlayer();

  return (
    <div className="h-full flex justify-between items-center">
      <div>song card</div>
      <div className="flex flex-col items-center gap-2">
        <Controls />
        <TimeLine />
      </div>
      <div>Volume</div>
    </div>
  );
};

export default Player;
