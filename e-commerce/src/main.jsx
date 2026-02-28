import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import AppRouter from "./routes/AppRouter.jsx";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
