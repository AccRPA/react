import './Notes.css';
import NoteItem from './NoteItem/NoteItem';
import NewNote from './NewNote/NewNote';
import { useState } from 'react';

function createNote(card){
    return <NoteItem key={card.id} id={card.id} title={card.title} content={card.content}/>
}

function Notes(){
    const [arrayNotes, setArrayNotes] = useState([]);
    
    function addNote({title, description}){
        setArrayNotes((previous) => {
            const newNote = {
                id: previous.length + 1,
                title: title,
                content: description
            };
            return [...previous, newNote];
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