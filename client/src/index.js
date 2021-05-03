import React from "react";
import ReactDOM from "react-dom";

//import * as serviceWorker from './serviceWorker';

import "./index.css";

import App from "./app";
import Firebase, { FirebaseContext } from "./components/Firebase";

import dotenv from "dotenv";
dotenv.config();

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
