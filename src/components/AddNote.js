import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddNote = () => {
  return (
    <Container>
      <h2 className="my-3">Add a Note</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Description"
            name="description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" placeholder="Tag" name="tag" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddNote;
