import { useState } from 'react';
import "./../App.css";

const AddNote = ({ id, handleAddNote , handleDeleteNote}) => {
	const [noteText, setNoteText] = useState('');
	const handleChange = (event) => {
			setNoteText(event.target.value);
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='new_note'>
			<div className = "top">
				<textarea
					rows='8'
					cols='10'
					placeholder='Type to add a note...'
					value={noteText}
					onChange={handleChange}
					className="text"
				></textarea>
				<button className="delete_note"title="Delete a Note" onClick={()=>handleDeleteNote(id)}>X</button>
			</div>
			<div className='footer'>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;