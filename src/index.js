/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import NoteState from "./context/notes/NoteState";
import ModifyNote from "./context/notes/ModifyNote";
import App from "./App";
import "./index.css";
import AuthHandler from "./context/authentication/AuthHandler";
import { BrowserRouter as Router } from "react-router-dom";
import Toastifier from "./context/authentication/ToastContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Toastifier>
        <AuthHandler>
          <NoteState>
            <ModifyNote>
              <App />
            </ModifyNote>
          </NoteState>
        </AuthHandler>
      </Toastifier>
    </Router>
  </React.StrictMode>
);
