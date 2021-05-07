import admin, { initializeApp, credential as _credential } from "firebase-admin";

initializeApp({
  credential: _credential.applicationDefault(),
});

export default admin;
