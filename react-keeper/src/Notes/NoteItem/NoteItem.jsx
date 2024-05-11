import './NoteItem.css';

function NoteItem(props){
    function removeNote(){
        props.delete(props.id);
    }

    return (<div className="note">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>{props.id}</p>
        <div className="group-button">
            <button className="action" onClick={removeNote}>X</button>
        </div>
    </div>);
}

export default NoteItem;