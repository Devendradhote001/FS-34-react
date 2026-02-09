import React, { useEffect } from "react";

const Home = () => {
  let count = 1;
//   useEffect(() => {
//     console.log("home rendering...");

//     let interval = setInterval(() => {
//       console.log("hello");
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       console.log("me chala gaya hu...");
//     };
//   }, []);

  return (
    <div>
      <h1>Hello i m home</h1>
    </div>
  );
};

export default Home;
