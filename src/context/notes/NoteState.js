import axios from "axios";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const Host = "http://localhost:5000";
  // Get All Notes
  const [notes, setNotes] = useState([]);
  const getAllNotes = async () => {
    try {
      const response = await axios.get(`${Host}/api/notes/getnotes`, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNWQ0NDI5M2E4NDdhZWZmZjgwNDM4In0sImlhdCI6MTY1NzYxMDUzNH0._0bRks8j79EwqYS7-mGeHaXApaGrSVRhNdf5XOgdmh0",
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // Add a Note

  // Edit a Note

  // Delete a Note
  return (
    <NoteContext.Provider value={{ notes, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
