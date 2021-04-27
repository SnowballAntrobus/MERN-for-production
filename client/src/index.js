import React from "react";
import ReactDOM from "react-dom";

//import * as serviceWorker from './serviceWorker';

import App from "./app";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
