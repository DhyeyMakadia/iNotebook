import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const { addNote } = useContext(NoteContext);

  let schema = yup.object().shape({
    title: yup
      .string()
      .required("This field is required")
      .min(5, "Minimum 5 Characters Required"),
    description: yup
      .string()
      .required("This field is required")
      .min(5, "Minimum 5 Characters Required"),
    tag: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    const res = await addNote(data)
    if(res.status === 200) reset()
  };

  return (
    <Container>
      <h2 className="my-3">Add a Note</h2>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Title<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            {...register("title")}
          />
          <p className="text-danger">{errors.title?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Description<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Description"
            name="description"
            {...register("description")}
          />
          <p className="text-danger">{errors.description?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tag</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tag"
            name="tag"
            {...register("tag")}
          />
          <p className="text-danger">{errors.tag?.message}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddNote;
