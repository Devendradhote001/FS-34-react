import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./router/AppRouter.jsx";
import { ContextProvider } from "./MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRouter />
  </ContextProvider>
);
