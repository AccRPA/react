import { Button, Container, Drawer } from "@mui/material";
import { useState } from "react";

import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import SettingsAmountCards from "./SettingsAmountCards";
import SettingsTimeCardVisible from "./SettingsTimeCardVisible";
import SettingsCardDisplayMode from "./SettingsCardDisplayMode";
import SettingsShowEffect from "./SettingsShowEffects";

interface Props {
    resetGame: Function
}

function Settings({resetGame}: Props){
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    
    return (
        <>        
            <Button variant="text">
                <SettingsIcon onClick={toggleDrawer(true)}></SettingsIcon>
            </Button>            
            <Drawer open={open} 
                onClose={toggleDrawer(false)}
                BackdropProps={{style: {backgroundColor: 'rgba(200, 200, 200, 0.3)'}}}
            >
                <Container>
                    <Button variant="text" onClick={toggleDrawer(false)}>
                        <CloseIcon></CloseIcon>
                    </Button>
                    <SettingsAmountCards resetGame={resetGame}></SettingsAmountCards>
                    <SettingsTimeCardVisible></SettingsTimeCardVisible>
                    <SettingsCardDisplayMode></SettingsCardDisplayMode>
                    <SettingsShowEffect></SettingsShowEffect>
                </Container>
            </Drawer>
        </>
    );
}

export default Settings;