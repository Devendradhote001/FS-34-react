import React from "react";
import Navigation from "./components/Navigation";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useState } from "react";

const App = () => {
  const [createModal, setCreateModal] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [getSingleNote, setGetSingleNote] = useState(null);
  console.log(notesData);

  let filterNotes = (id) => {
    console.log("clicked");
    let data = notesData.find((val, ind) => ind === id);
    setGetSingleNote(data);
  };

  let deleteNote = (id) => {
    let restNotes = notesData.filter((val, ind) => ind !== id);
    setNotesData(restNotes);
  };

  return (
    <div className="h-screen flex p-8 gap-5">
      <div className=" w-[20%] p-4 rounded-xl flex flex-col justify-between border-2 border-gray-400">
        <div className="flex flex-col gap-3">
          {notesData.length ? (
            notesData.map((val, ind) => {
              return (
                <Navigation
                  deleteNote={deleteNote}
                  filterNotes={filterNotes}
                  key={ind}
                  id={ind}
                  val={val}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </div>
        <button
          onClick={() => setCreateModal(true)}
          className="w-full bg-blue-700 text-white py-2 cursor-pointer rounded-xl"
        >
          Create Note
        </button>
      </div>
      <div className="w-[80%] p-4 rounded-xl border-2 border-gray-400">
        {getSingleNote ? (
          <Note getSingleNote={getSingleNote} />
        ) : (
          <h1>No notes</h1>
        )}
      </div>
      {createModal && (
        <>
          <div
            onClick={() => setCreateModal(false)}
            className="h-full w-full bg-black/30 absolute top-0 left-0"
          >
            xvjasg
          </div>
          <CreateNote
            setCreateModal={setCreateModal}
            setNotesData={setNotesData}
          />
        </>
      )}
    </div>
  );
};

export default App;
