import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
//@ts-ignore
import SnackbarProvider from "react-simple-snackbar";
import { store } from "./store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
        <SnackbarProvider>
          <AppErrorBoundary>
            <App />
          </AppErrorBoundary>
        </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
