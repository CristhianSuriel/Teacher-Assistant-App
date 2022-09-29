import React, { useState, useEffect } from "react";
import { toast } from "react-toastify"; //allows use of notifications
import NoteSearch from "./NoteSearch"; // component that searches notes
import Note from "./Note"; // Component for saved notes
import AddNewNote from "./AddNewNote"; //Component to add new note
import { getNoteData } from "../functions/get-data";
import { postNoteData } from "../functions/post-data";
import { deleteNoteData } from "../functions/delete-data";
import { updateNoteData } from "../functions/put-data";

const NotesList = () => {
  // States and variables
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Server Communications
  useEffect(() => {
    getNoteData() // fetches notes from db
      .then((dataVal) => {
        const reversedDataVal = dataVal.reverse();
        setNotes(reversedDataVal); //sets the "data" state equal to data from db
      })
      .catch((err) => console.log(err));
  });
  // useEffect(() => {
  //   console.log("Your new notes list is:");
  //   console.log(notes);
  // }, [notes]);

  // Add and Delete Note handlers
  const addNote = (subject, text) => {
    const date = new Date();
    postNoteData(subject, text, date.toLocaleDateString());
    toast.success("New Note added", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const deleteNote = (currentID) => {
    deleteNoteData(currentID);
    toast.error("Note deleted", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const updateNote = (currentID, subject, text) => {
    const date = new Date();
    updateNoteData(currentID, subject, text, date.toLocaleDateString());
    toast.success("Note Updated", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // functions and useEffects
  const searchedNotes = notes.filter(
    (note) =>
      note.subject.toLowerCase().includes(searchText) +
      note.text.toLowerCase().includes(searchText)
  );
  const listNotes = (notes2List) => {
    return notes2List.map((obj, index) => (
      <Note
        key={obj._id}
        id={obj._id}
        subject={obj.subject}
        text={obj.text}
        date={obj.date}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNote}
      />
    ));
  };

  // This is the notes app DOM
  return (
    <div className="notes-wrapper">
      <NoteSearch handleSearchNote={setSearchText} />
      <div className="all-notes">
        <AddNewNote handleAddNote={addNote} />
        {listNotes(searchedNotes)}
      </div>
    </div>
  );
};

export default NotesList;
