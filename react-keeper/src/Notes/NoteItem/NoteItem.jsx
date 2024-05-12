import './NoteItem.css';
import { Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function NoteItem(props){
    function removeNote(){
        props.delete(props.id);
    }

    function openNoteDetails(){
        props.details.setOpenDetails(props);
    }

    return (
        <Zoom in={true}>
            <div className="note">
                <h4 className={ 'multiline-ellipsis-title' }>{ props.id }. { props.title }</h4>
                <p className={ 'multiline-ellipsis-description'}>{ props.description }</p>
                <div className="group-button">
                    <button className="discard" title="Delete" onClick={removeNote}>
                        <DeleteIcon></DeleteIcon>
                    </button>
                    <button className="action" title="Details" onClick={openNoteDetails}>
                        <VisibilityIcon></VisibilityIcon>
                    </button> 
                </div>
            </div>
        </Zoom>);
}

export default NoteItem;