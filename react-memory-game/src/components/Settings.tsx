import { Box, Button, Container, Drawer, Stack } from "@mui/material";
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
                <Box p={1}>
                    <Stack spacing={3}>
                        <Box display="flex" justifyContent="flex-end" position="absolute" right={0} top={0}>
                            <Button variant="text" onClick={toggleDrawer(false)}>
                                <CloseIcon></CloseIcon>
                            </Button>
                        </Box>
                        <SettingsAmountCards resetGame={resetGame}></SettingsAmountCards>
                        <SettingsTimeCardVisible></SettingsTimeCardVisible>
                        <SettingsCardDisplayMode></SettingsCardDisplayMode>
                        <SettingsShowEffect></SettingsShowEffect>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}

export default Settings;