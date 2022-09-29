import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Note = ({ id, subject, text, date, handleDeleteNote, handleUpdateNote}) => {
  const [updatedSubject, setUpdatedSubject] = useState(subject);
  const [updatedText, setUpdatedText] = useState(text);

  const deleteNote = () => {
    handleDeleteNote(id);
  };
  return (
    <form className="note-container">
      <input type="text" placeholder="Subject here" value={updatedSubject} onChange={(e)=>setUpdatedSubject(e.target.value)}/>
      <textarea
        cols="30"
        rows="10"
        placeholder="Write notes.."
        value={updatedText}
        onChange={(e)=>setUpdatedText(e.target.value)}
      ></textarea>
      <div className="note-extra">
        <span>{date}</span>
        <FontAwesomeIcon icon={faFloppyDisk} className="save" onClick={(e)=>handleUpdateNote(id, updatedSubject, updatedText)}/>
        <div className="note-btn delete" onClick={deleteNote}>
          <FontAwesomeIcon icon={faTrashCan} />
          <span> Delete</span>
        </div>
      </div>
    </form>
  );
};

export default Note;
