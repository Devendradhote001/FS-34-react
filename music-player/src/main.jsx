import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SongsProvider } from "./MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <SongsProvider>
    <App />
  </SongsProvider>
);
