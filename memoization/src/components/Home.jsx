import React, { useState } from "react";

const Home = ({ count, greet }) => {
  console.log("home rendering...");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default React.memo(Home);
