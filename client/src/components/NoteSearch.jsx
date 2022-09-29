import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NoteSearch =({handleSearchNote})=>{
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={(event)=>handleSearchNote(event.target.value)}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </div>
  )
}

export default NoteSearch;