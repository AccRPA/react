import { Typography, Slider, Box } from "@mui/material";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { SettingsModel } from "../models/Settings.model";

function SettingsTimeCardVisible(){
    const settingsContext = useContext(SettingsContext);

    const cardTimeVisibleMarks = [
        {
            value: 1.5,
            label: '1.5 sec',
        },
        {
            value: 2,
            label: '2 sec',
        },
        {
            value: 2.5,
            label: '2.5 sec',
        },
        {
            value: 3,
            label: '3 sec',
        },
    ];

    const handleTimeVisible = (_: Event, value: number | number[]) => {
        const time = Array.isArray(value) ? value[0] : value;
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardTimeMsVisible: time};
        });
    };
    
    function valuetext(value: number) {
        return `${value}`;
    }
    
    return (<Box role="presentation">            
                <Typography>Time a card is visible</Typography>
                <Slider
                    aria-label="Time a card is visible"
                    defaultValue={settingsContext.settings.cardTimeMsVisible}
                    getAriaValueText={valuetext}
                    step={0.5}
                    marks={cardTimeVisibleMarks}
                    min={1.5}
                    max={3}
                    valueLabelDisplay="auto"
                    onChange={handleTimeVisible}
                    value={settingsContext.settings.cardTimeMsVisible}
                />
            </Box>);
}

export default SettingsTimeCardVisible;