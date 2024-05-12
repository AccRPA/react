import './NoteItem.css';
import { Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteItem(props){

    function removeNote(){
        props.delete(props.id);
    }

    return (
        <Zoom in={true}>
            <div className="note">
                <h4 className={ 'multiline-ellipsis-title' }>{ props.id }. { props.title }</h4>
                <p className={ 'multiline-ellipsis-description'}>{ props.description }</p>
                <div className="group-button">
                    <button className="action" title="Delete" onClick={removeNote}>
                        <DeleteIcon></DeleteIcon>
                    </button>
                </div>
            </div>
        </Zoom>);
}

export default NoteItem;