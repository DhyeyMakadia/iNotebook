import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <AddNote />
        <Note />
      </Container>
    </>
  );
};

export default Home;
