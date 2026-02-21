import axios from "axios";
import React from "react";
import MusicCard from "./components/MusicCard";

const App = () => {
  
  let songsData = [
    {
      name: "Jana Samjho na",
      Path: "./js.mp3",
    },
    {
      name: "Hamari Adhuri Kahani",
      Path: "./hak.mp3",
    },
    {
      name: "channa Mereya",
      Path: "./ch.mp3",
    },
    {
      name: "Ankhiyan gulaab",
      Path: "./ag.mp3",
    },
    {
      name: "Dekha Tenu",
      Path: "./dt.mp3",
    },
  ];

  return (
    <div className="h-screen bg-gray-300 p-4 flex flex-col">
      <h1 className="text-2xl self-center">Sasta Music player</h1>
      <div className="p-4 flex flex-col gap-4">
        {songsData.map((elem, index) => (
          <MusicCard key={index} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
