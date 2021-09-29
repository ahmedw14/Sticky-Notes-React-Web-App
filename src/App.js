import React,{useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/notesList";

function App() {
  const [showResults, setShowResults] = React.useState(false)
  const Show = () => setShowResults(true)
  const hide = () => setShowResults(false)
  const[notes, setNotes] = useState([
  ]);
  useEffect(() => {
    const data = localStorage.getItem('data');
		const savedNotes = JSON.parse(data);
		if (savedNotes)
			setNotes(savedNotes);
	}, []);

	useEffect(() => {
		localStorage.setItem('data',JSON.stringify(notes)
		);
	}, [notes]);


  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      note: text,
      date: date.toLocaleString()
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
    hide();
  }
  const delete_note=(id)=>{
    const before = notes.length;
    const newNotes = notes.filter((note)=> (note.id!==id));
    setNotes(newNotes);
    const after = newNotes.length;
    if(before===after){
      hide();
    }
  }
  const [searchText, setSearchText] = useState('');
  const SetSearch = (event) => {
    setSearchText(event.target.value);
};

  return (
    
    <div className="App">
      <div className="top">
        <input className="search_bar" type="input" placeholder="Search" onChange={SetSearch}></input>
        <button className="add_note" title="Add a Note" onClick={Show}>+</button>
      </div>
      <div>
        <NotesList 
        notes={notes.filter((note)=> note.note.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={delete_note}

        show = {showResults}/>
      </div>
    </div>
  );
}
export default App;