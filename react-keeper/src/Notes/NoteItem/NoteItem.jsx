import './NoteItem.css';
import { Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteItem(props){
    function removeNote(){
        props.delete(props.id);
    }

    function cutText(text, length){
        const hasToBeCut = text.length > length;
        return hasToBeCut ? text.substring(0, length) + '...' : text;
    }
    return (
        <Zoom in={true}>
            <div className="note">
                <h4>{ props.id }. { cutText(props.title, 20) }</h4>
                <p>{ cutText(props.description, 50) }</p>
                <div className="group-button">
                    <button className="action" title="Delete" onClick={removeNote}>
                        <DeleteIcon></DeleteIcon>
                    </button>
                </div>
            </div>
        </Zoom>);
}

export default NoteItem;