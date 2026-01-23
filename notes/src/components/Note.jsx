import React from "react";

const Note = ({ getSingleNote }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">{getSingleNote.noteName}</h1>
      <p>{getSingleNote.description}</p>
    </div>
  );
};

export default Note;
