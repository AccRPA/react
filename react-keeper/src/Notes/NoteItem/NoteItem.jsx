import './NoteItem.css';
import { Zoom } from '@mui/material';

function NoteItem(props){
    function removeNote(){
        props.delete(props.id);
    }

    return (
        <Zoom in={true}>
            <div className="note">
                <h4>{props.id}. {props.title}</h4>
                <p>{props.description}</p>
                <div className="group-button">
                    <button className="action" title="Delete" onClick={removeNote}>X</button>
                </div>
            </div>
        </Zoom>);
}

export default NoteItem;