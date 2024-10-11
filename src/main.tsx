import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
//@ts-ignore
import { store } from "./store";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { AppContext } from "./shared/app-context";
import { AppErrorBoundary } from "@components";

const queryClient = new QueryClient();

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <AppErrorBoundary>
            <App />
          </AppErrorBoundary>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
