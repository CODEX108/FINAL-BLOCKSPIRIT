import React from "react";
import ReactDOM from "react-dom";
import{BrowserRouter} from "react-router-dom";
import App from "./App";
import { TransactionProvider  } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
  <TransactionProvider>
    <App />
  </TransactionProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);


