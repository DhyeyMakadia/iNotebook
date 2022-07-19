import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../authentication/AuthContext";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const { token } = useContext(AuthContext);
  const Host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  // Get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axios.get(`${Host}/api/notes/getnotes`, {
        headers: {
          "auth-token": token,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Add a Note
  const addNote = async (newNote) => {
    let data = {};
    if (newNote.title) data.title = newNote.title;
    if (newNote.description) data.description = newNote.description;
    if (newNote.tag) data.tag = newNote.tag;
    try {
      const response = await axios.post(`${Host}/api/notes/addnote`, data, {
        headers: {
          "auth-token": token,
        },
      });
      if (response.status === 200) {
        setNotes(notes.concat(response.data));
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Edit a Note
  const editNote = async (note) => {
    const id = note._id;
    try {
      const response = await axios.put(
        `${Host}/api/notes/updatenote/${id}`,
        note,
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      let updatedNote = JSON.parse(JSON.stringify(notes));
      if (response.status === 200) {
        let index = updatedNote.findIndex((e) => e._id === id);
        updatedNote[index].title = response.data.title;
        updatedNote[index].description = response.data.description;
        updatedNote[index].tag = response.data.tag;
        setNotes(updatedNote);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `${Host}/api/notes/deletenote/${id}`,
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      if (response.status === 200)
        setNotes(
          notes.filter((note) => {
            return note._id !== id;
          })
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getAllNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
