import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewNote = ({handleAddNote}) => {
  const [noteSubject, setNoteSubject] = useState("");
  const [noteText, setNoteText] = useState("");

  let currentDate = new Date();
  currentDate = currentDate.toLocaleDateString();
  
  const handleSaveClick =()=>{
    if(noteSubject.trim().length > 0 && noteText.trim().length > 0 ) {
      handleAddNote(noteSubject, noteText)
      setNoteSubject('');
      setNoteText('');
    }else{
      toast.warn("You must fill all given fields", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <form className="note-container new-note">
      <input
        type="text"
        placeholder="New subject here"
        value={noteSubject}
        onChange={(e) => setNoteSubject(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="New notes here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <div className="note-extra">
        <span>{currentDate}</span>
        <span className="note-btn save" onClick={handleSaveClick}>
          <FontAwesomeIcon icon={faFloppyDisk} />
          <span> Save</span>
        </span>
      </div>
    </form>
  );
};

export default AddNewNote;
