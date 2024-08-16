import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { SettingsModel } from "../models/Settings.model";

function SettingsShowEffect(){
    const settingsContext = useContext(SettingsContext);
    
    const handleShowEffects = (_: any, value: boolean) => {
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, showFireworks: value};
        });
    };   

    return (<Box role="presentation">            
                <Typography>Show effects</Typography>
                <ToggleButtonGroup
                    value={settingsContext.settings.showFireworks}
                    exclusive
                    onChange={handleShowEffects}
                    aria-label="Show effects"
                >
                    <ToggleButton value={true} aria-label="Activate effects">
                        ON
                    </ToggleButton>
                    <ToggleButton value={false} aria-label="Disable effects">
                        OFF
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>);
}

export default SettingsShowEffect;