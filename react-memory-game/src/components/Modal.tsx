import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ModalAction } from "../models/enum/ModalAction.enum";
import Confetti from "./Confetti";
import { ConfettiType } from "../models/enum/ConfettiType.enum";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

interface Props {
    showModal: boolean,
    onClick: (value: ModalAction) => void
}

function Modal({showModal, onClick}: Props){
    const settingsContext = useContext(SettingsContext);

    const handleClick= (value: ModalAction) => {
        onClick(value);
    };

    return (<>
        {
            settingsContext.settings.showFireworks 
            ? <Confetti confettiType={showModal ? ConfettiType.FIREWORKS : ConfettiType.NONE}></Confetti>
            : null
        }       
        <Dialog 
            disableEscapeKeyDown={true}
            open={showModal} 
            draggable="false"
            BackdropProps={{style: {backgroundColor: 'rgba(200, 200, 200, 0.3)'}}}
        >
            <DialogTitle align="center">
                Game finished
            </DialogTitle>
            <DialogContent>
                <DialogContentText align="center">
                    Well done!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={4}
                    p={2}
                    >
                    <Button variant="text" onClick={() => handleClick(ModalAction.HOME)}>Go Home</Button>
                    <Button variant="contained" onClick={() => handleClick(ModalAction.PLAY)}>Play again</Button>
                </Box>
            </DialogActions>
        </Dialog> 
    </>       
    );
}

export default Modal;