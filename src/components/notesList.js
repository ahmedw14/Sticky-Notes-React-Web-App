import Note from "./note";
import AddNote from "./addNote";
import React from "react";
import { nanoid } from 'nanoid';

const NotesList = ({notes, handleAddNote, handleDeleteNote,show})=>{
    
    return(
        <div className="notes_list" >
            {notes.map((note)=>(
                    <Note key={note.id} id ={note.id} note={note.note} date={note.date} handleDeleteNote={handleDeleteNote}/> 
            ))}
            
            
            {show ?<AddNote id={nanoid()} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>: null}
        </div>
    )
}

export default NotesList;