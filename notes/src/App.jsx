import React from "react";
import Navigation from "./components/Navigation";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useState } from "react";

const App = () => {
  const [createModal, setCreateModal] = useState(false);
  const [notesData, setNotesData] = useState([]);
  console.log(notesData);

  return (
    <div className="h-screen flex p-8 gap-5">
      <div className=" w-[20%] p-4 rounded-xl flex flex-col justify-between border-2 border-gray-400">
        <Navigation />
        <button
          onClick={() => setCreateModal(true)}
          className="w-full bg-blue-700 text-white py-2 cursor-pointer rounded-xl"
        >
          Create Note
        </button>
      </div>
      <div className="w-[80%] p-4 rounded-xl border-2 border-gray-400">
        <Note />
      </div>
      {createModal && (
        <>
          <div
            onClick={() => setCreateModal(false)}
            className="h-full w-full bg-black/30 absolute top-0 left-0"
          >
            xvjasg
          </div>
          <CreateNote setNotesData={setNotesData} />
        </>
      )}
    </div>
  );
};

export default App;
