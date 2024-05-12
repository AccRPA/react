import './NoteItem.css';
import { Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useRef, useState } from 'react';

function NoteItem(props){
    const isFirefox = typeof InstallTrigger !== 'undefined';
    
    const letterWidth = 13;
    const lineHeight = 20;
    const noteRef = useRef();
    const [noteSize, setNoteSize] = useState({
        width: 0, 
        height: 0
    });

    // setting the new size
    function getNoteSize(){
        setNoteSize(getWidthHeightWithoutPadding());
    }

    // for the first time rendering adding handler for when the window is resized
    useEffect(() => {
        getNoteSize();
        window.addEventListener('resize', () => getNoteSize());
    }, []);

    function removeNote(){
        props.delete(props.id);
        getNoteSize();
    }

    function cutTitleText(text){
        const width = noteSize.width;
        const columns = Math.ceil(width / letterWidth);
        return cutText(text, columns);
    }

    function cutDescText(text){
        const width = noteSize.width;
        const height = noteSize.height - 20; // minus the height of the title

        const rows = Math.ceil(height / lineHeight);
        const columns = Math.ceil(width / letterWidth);
        return cutText(text, rows * columns);
    }

    function cutText(text, length){
        const hasToBeCut = text.length > length;
        return hasToBeCut ? text.substring(0, length) + '...' : text;
    }

    function getWidthHeightWithoutPadding(){
        
        let elementHeight = noteRef.current?.clientHeight ?? 0;  // height with padding
        let elementWidth = noteRef.current?.clientWidth ?? 0;   // width with padding
        
        if (!!noteRef.current){
            const computedStyle = getComputedStyle(noteRef.current);
            elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
            elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        }

        return {
            width: elementWidth,
            height: elementHeight
        };
    }

    return (
        <Zoom in={true}>
            <div className="note" ref={noteRef}>
                <h4 className={ isFirefox ? 'multiline-ellipsis-ff' : 'multiline-ellipsis-title-cs' }>{ props.id }. { props.title }</h4>
                <p className={ isFirefox ? 'multiline-ellipsis-ff' : 'multiline-ellipsis-cs'}>{ props.description }</p>
                <div className="group-button">
                    <button className="action" title="Delete" onClick={removeNote}>
                        <DeleteIcon></DeleteIcon>
                    </button>
                </div>
            </div>
        </Zoom>);
}

export default NoteItem;