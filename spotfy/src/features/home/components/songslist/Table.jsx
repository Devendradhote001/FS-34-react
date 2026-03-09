import React from "react";

const Table = () => {
  return (
    <div className="text-xl grid grid-cols-[1fr_3fr_2fr_2fr_1fr]">
      <div>#</div>
      <div>Title</div>
      <div>Album</div>
      <div>Date added</div>
      <div>Time</div>
    </div>
  );
};

export default Table;
