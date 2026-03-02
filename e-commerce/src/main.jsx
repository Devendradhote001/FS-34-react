import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./routes/AppRouter.jsx";
import { store } from "./store/store.jsx";

let queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </QueryClientProvider>
);
