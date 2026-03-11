import React from "react";
import { Pause, Shuffle, SkipBack, SkipForward } from "lucide-react";

const Controls = () => {
  return (
    <div className="flex items-center gap-4">
      <Shuffle />
      <SkipBack />
      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center text-black cursor-pointer">
        <Pause />
      </div>
      <SkipForward />
    </div>
  );
};

export default Controls;
