import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";

const Note = () => {
  const { getAllNotes, notes } = useContext(NoteContext);
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2 className="mt-3">Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              id={note._id}
              title={note.title}
              description={note.description}
              tag={note.tag}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Note;
