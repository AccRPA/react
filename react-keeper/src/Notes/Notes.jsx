import './Notes.css';
import NoteItem from './NoteItem/NoteItem';
import NewNote from './NewNote/NewNote';
import NoteDetails from './NoteDetails/NoteDetails';
import { useState } from 'react';

function Notes(){
    const [arrayNotes, setArrayNotes] = useState([]);
    const [openDetails, setOpenDetails] = useState(null);
    const openDetailsConfig = { openDetails, setOpenDetails };

    function addNote({title, description}){
        setArrayNotes((previous) => {
            const newNote = {
                id: previous.length + 1,
                title: title,
                description: description,
                date: new Date().toLocaleString()
            };
            return [...previous, newNote];
        });
    }

    function createNote(card){
        return <NoteItem 
            key={card.id} 
            id={card.id} 
            title={card.title} 
            description={card.description} 
            date={card.date}
            delete={(id) => deleteNote(id)}
            details={openDetailsConfig}>
            </NoteItem>;
    }
    
    function deleteNote(id){
        setArrayNotes((previous) => {
            return previous.filter(notes => notes.id !== id);
        });
    }

    return (<section className="content-container">
                <NewNote onAddNote={(note) => addNote(note)}></NewNote>
                <div className="notes-container">
                    {arrayNotes.map(createNote)}
                </div>
                { !!openDetails && <NoteDetails config={openDetailsConfig} note={openDetails}></NoteDetails> }
            </section>);
}

export default Notes;