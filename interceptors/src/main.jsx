import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { ToastContainer } from "react-toastify";
import GlobalError from "./components/GlobalError.jsx";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
      <GlobalError />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);
