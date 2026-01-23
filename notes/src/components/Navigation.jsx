import React from "react";
import { Trash2 } from "lucide-react";

const Navigation = ({ val, id, filterNotes, deleteNote }) => {
  return (
    <div className="px-4 py-2 flex justify-between bg-black text-white cursor-pointer rounded-xl">
      <h1 onClick={() => filterNotes(id)} className="font-semibold text-sm">
        {val.noteName.substring(0, 16)}...
      </h1>
      <Trash2 onClick={() => deleteNote(id)} className="text-red-600" />
    </div>
  );
};

export default Navigation;
