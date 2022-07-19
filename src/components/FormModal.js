import React, { useContext, useEffect, useState } from "react";
import ModifyNoteContext from "../context/notes/ModifyNoteContext";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NoteContext from "../context/notes/NoteContext";

const FormModal = (props) => {
  const { show, handleClose, setNote } = useContext(ModifyNoteContext);
  const { addNote, editNote } = useContext(NoteContext);
  const { note } = props;

  const [isLoading, setLoading] = useState(false);

  const handleModalHide = ()=>{
    reset()
    setNote(null)
    handleClose()
  }

  let schema = yup.object().shape({
    title: yup
      .string()
      .required("This field is required")
      .min(5, "Minimum 5 Characters Required"),
    description: yup
      .string()
      .required("This field is required")
      .min(6, "Minimum 6 Characters Required"),
    tag: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (note) {
      setValue("title", note.title);
      setValue("description", note.description);
      setValue("tag", note.tag);
      setValue("_id", note._id);
    } else {
      reset();
    }
    // eslint-disable-next-line
  }, [note]);

  const formSubmit = async (data) => {
    setLoading(true);
    let res;
    setTimeout(async () => {
      if (data._id) {
        res = await editNote(data);
      } else {
        res = await addNote(data);
      }
      if (res.status === 200) {
        setLoading(false);
        reset();
        handleClose();
      }
    }, 1000);
  };

  return (
    <>
      <Modal show={show} onHide={handleModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>{note ? "Update Note" : "Add Note"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(formSubmit)}>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalHide}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {!isLoading ? "Save Changes" : "Saving..."}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default FormModal;
