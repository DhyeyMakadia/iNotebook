import React, { useContext } from "react";
import Note from "./Note";
import { Container } from "react-bootstrap";
import FormModal from "./FormModal";
import ModifyNoteContext from "../context/notes/ModifyNoteContext";

const Home = () => {
  const { note } = useContext(ModifyNoteContext);
  return (
    <>
      <Container>
        <FormModal note={note} />
        <Note />
      </Container>
    </>
  );
};

export default Home;
