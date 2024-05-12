import './NoteDetails.css';
import { Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function NoteDetails({config, note}){
    function handleClose(){
        config.setOpenDetails(false);
    }

    return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!!config.openDetails}
        onClick={handleClose}>
            <div className="details">
                <button className="discard"
                    title="Close"
                    onClick={handleClose}>
                    <CloseIcon></CloseIcon>
                </button>
                <div className="title">{note.title}</div>
                <div className="body">{note.description}</div>
                <div className="footer">{note.date}</div>
            </div>
    </Backdrop>
}

export default NoteDetails;