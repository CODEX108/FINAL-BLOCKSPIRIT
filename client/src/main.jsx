import React from "react";
import ReactDOM from "react-dom/client";
import{BrowserRouter} from "react-router-dom";
import App from "./App";
import { TransactionProvider  } from "./context/TransactionContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <TransactionProvider>
    <App />
  </TransactionProvider>
  </BrowserRouter>,
);


