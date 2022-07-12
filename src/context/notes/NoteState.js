import axios from "axios";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const Host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  // Get All Notes
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
  const addNote = async (newNote) => {
    let data = {}
    if(newNote.title) data.title = newNote.title
    if(newNote.description) data.description = newNote.description
    if(newNote.tag) data.tag = newNote.tag
    try {
      const response = await axios.post(`${Host}/api/notes/addnote`, data,{
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNWQ0NDI5M2E4NDdhZWZmZjgwNDM4In0sImlhdCI6MTY1NzIwNjczNH0.oAZb3rKX6XWjxfSzZDiNDl2dKDMojf8jaewtszAMfQg",
        },
      });
      if(response.status === 200){
        setNotes(notes.concat(response.data))
        return response
      } 
    } catch (error) {
      console.error(error);
    }
  }

  // Edit a Note

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`${Host}/api/notes/deletenote/${id}`, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNWQ0NDI5M2E4NDdhZWZmZjgwNDM4In0sImlhdCI6MTY1NzIwNjczNH0.oAZb3rKX6XWjxfSzZDiNDl2dKDMojf8jaewtszAMfQg",
        },
      });
      if(response.status === 200) setNotes(notes.filter((note)=>{return note._id!==id}))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NoteContext.Provider value={{ notes, getAllNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
