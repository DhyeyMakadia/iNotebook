import React, { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";
import ModifyNoteContext from "../context/notes/ModifyNoteContext";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authentication/AuthContext";

const Note = () => {
  const { getAllNotes, notes } = useContext(NoteContext);
  const { token } = useContext(AuthContext);
  const { handleShow } = useContext(ModifyNoteContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (token) {
      getAllNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h2 className="my-3">Your Notes</h2>
        <div className="my-auto">
          <Button variant="success" onClick={() => handleShow()}>
            Add Note
          </Button>
        </div>
      </div>
      <div className="row">
        {notes.length > 0 ? (
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })
        ) : (
          <div className="mt-5 text-center">
            <code className="text-danger">404:Not found!!</code>
            <div>
              Currently, You don't have any notes. You can create a note by
              clicking the <code>Add Note</code> button
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Note;
