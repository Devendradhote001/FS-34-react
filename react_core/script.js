import React from "react";

let h1 = document.createElement("h1");
console.log("Dom elem->", h1);

let reactH1 = React.createElement(
  "h1",
  { class: "container" },
  React.createElement("span", {}, "i m span")
);

ReactDOM.createRoot(document.getElementById("same")).render(reactH1);

console.log(reactH1);
