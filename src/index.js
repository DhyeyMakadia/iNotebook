/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import NoteState from "./context/notes/NoteState";
import ModifyNote from "./context/notes/ModifyNote";
import App from "./App";
import "./index.css";
import AuthHandler from "./context/authentication/AuthHandler";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthHandler>
        <NoteState>
          <ModifyNote>
            <App />
          </ModifyNote>
        </NoteState>
      </AuthHandler>
    </Router>
  </React.StrictMode>
);
