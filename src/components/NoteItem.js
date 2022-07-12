import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { title, description, id } = props;
  return (
    <div className="col-md-4 mb-3 ">
      <Card className="h-100">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{title}</Card.Title>
            <div>
              <i className="fa fa-pencil mx-2 icon"></i>
              <i className="fa fa-trash mx-2 icon" onClick={()=>deleteNote(id)}></i>
            </div>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
