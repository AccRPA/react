import './Notes.css';
import NoteItem from './Note-Item/Note-Item';

function createNote(card){
    return <NoteItem key={card.id} id={card.id} title={card.title} content={card.content}/>
}

function Notes(){
    const notesArray = [{
        id: 1,
        title: 'Card 1',
        content: 'This is card 1'
    },
    {
        id: 2,
        title: 'Card 2',
        content: 'This is card 2'
    },
    {
        id: 3,
        title: 'Card 3',
        content: 'This is card 3'
    },
    {
        id: 4,
        title: 'Card 4',
        content: 'This is card 4'
    },];
    return (<section className="notes-container">
        {notesArray.map(createNote)}
    </section>);
}

export default Notes;