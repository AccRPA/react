import './Notes.css';
import NoteItem from './NoteItem/NoteItem';
import NewNote from './NewNote/NewNote';
import { useState } from 'react';

function Notes(){
    const [arrayNotes, setArrayNotes] = useState([]);
    
    function addNote({title, description}){
        setArrayNotes((previous) => {
            const newNote = {
                id: previous.length + 1,
                title: title,
                description: description
            };
            return [...previous, newNote];
        });
    }

    function createNote(card){
        return <NoteItem key={card.id} id={card.id} title={card.title} description={card.description} delete={(id) => deleteNote(id)}></NoteItem>;
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
            </section>);
}

export default Notes;