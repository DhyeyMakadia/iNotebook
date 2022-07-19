import { useState } from "react";
import ModifyNoteContext from "./ModifyNoteContext";

const ModifyNote = (props) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (ChangeNote) => {
    if (ChangeNote) {
      setNote(ChangeNote);
    } else {
      setNote(null);
    }
    setShow(true);
  };

  return (
    <ModifyNoteContext.Provider value={{ show, handleShow, handleClose, note, setNote }}>
      {props.children}
    </ModifyNoteContext.Provider>
  );
};

export default ModifyNote;
