import React from "react";
import ReactDOM from "react-dom/client";
import NoteState from "./context/notes/NoteState";
import App from "./App";

/* eslint-disable */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteState>
      <App />
    </NoteState>
  </React.StrictMode>
);
