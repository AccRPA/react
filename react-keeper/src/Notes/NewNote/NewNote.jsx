import { useState } from 'react';
import './NewNote.css';

function NewNote({onAddNote}){
    const defaultNote = {
        title: '',
        description: ''
    };
    const [createNote, setCreateNote] = useState(false);
    const [note, setNote] = useState(defaultNote);

    function getPlaceHolder(){
        return createNote ? 'Title': 'Add note';
    }

    function makeInputsAvailable(){
        setCreateNote(true);
    }

    function changeTitle(event){
        const title = event.target.value;
        setNote(previous => {
            return {
                title: title,
                description: previous.description
            };
        });
    }

    function changeDescription(event){
        const description = event.target.value;
        setNote(previous => {
            return {
                title: previous.title,
                description: description
            };
        });
    }

    function addNote(){
        onAddNote(note);
        discard();
    }

    function disableAddButton(){
        return Boolean(!note.title?.trim() || !note.description?.trim());
    }

    function discard(){
        setCreateNote(false);
        setNote(defaultNote);
    }

    return (
        <div className="newnote-container">
            <div className="newnote-centered">
                <input style={{ borderBottom: createNote ? '0' : ''}}  
                    placeholder={getPlaceHolder()} 
                    onClick={makeInputsAvailable}
                    value={note.title}
                    onChange={changeTitle}></input>
                <textarea style={{ display: createNote ? 'block' : 'none' }} 
                    placeholder='Description' 
                    rows='3'
                    value={note.description}
                    onChange={changeDescription}></textarea>
                <div className="group-button">
                    <button className="discard" style={{ display: createNote ? 'block' : 'none' }} 
                        onClick={discard}>X</button>
                    <button className="action" style={{ display: createNote ? 'block' : 'none' }} 
                        onClick={addNote} 
                        disabled={disableAddButton()}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default NewNote;