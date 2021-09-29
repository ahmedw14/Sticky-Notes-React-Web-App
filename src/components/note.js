import React from "react";
import "./../App.css";

function Note({id, note, date, handleDeleteNote}) {

    return(
        <div className = "note">
            <div className = "top">
                <button className="delete_note"title="Delete a Note" onClick={()=>handleDeleteNote(id)}>X</button>
                
                <p> {note}</p>
            </div>
            <footer className="date">{date}</footer>
        </div>
    );
}

export default Note;