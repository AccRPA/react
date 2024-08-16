import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { CardDisplayMode } from "../models/enum/CardDisplayMode.enum";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { SettingsModel } from "../models/Settings.model";

function SettingsCardDisplayMode(){
    const settingsContext = useContext(SettingsContext);
    const handleDisplayMode = (_: any, value: CardDisplayMode) => {
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardDisplayMode: value};
        });
    };   
    
    return (<Box role="presentation">            
                <Typography>Card display</Typography>
                <ToggleButtonGroup
                    value={settingsContext.settings.cardDisplayMode}
                    exclusive
                    onChange={handleDisplayMode}
                    aria-label="Card display mode"
                >
                    <ToggleButton value={CardDisplayMode.NUMBER} aria-label="Display number">
                        Number
                    </ToggleButton>
                    <ToggleButton value={CardDisplayMode.EMOJI} aria-label="Display emoji">
                        Emoji
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>);
}

export default SettingsCardDisplayMode;