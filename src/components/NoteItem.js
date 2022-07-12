import React from "react";
import { Card } from "react-bootstrap";

const NoteItem = (props) => {
  const { title, description, tag } = props;
  return (
    <div className="col-md-3">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
