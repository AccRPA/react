import './NoteItem.css';

function NoteItem(props){
    return (<div className="note">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.id}</p>
        <button>Remove</button>
    </div>);
}

export default NoteItem;