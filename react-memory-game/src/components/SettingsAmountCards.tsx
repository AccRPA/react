import { Alert, Box, Slider, Typography } from "@mui/material";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { SettingsModel } from "../models/Settings.model";

interface Props {
    resetGame: Function
}

function SettingsAmountCards ({resetGame}: Props){
    const settingsContext = useContext(SettingsContext);

    const numberOfCardsMarks = [
        {
            value: 4,
            label: '4',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    const handleNumberOfCards = (_: Event, value: number | number[]) => {
        const amount = Array.isArray(value) ? value[0] : value;
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardsAmount: amount};
        });
        resetGame(amount);
    };

    function valuetext(value: number) {
        return `${value}`;
    }   

    return (<Box role="presentation">
            <Alert severity="warning">
                Changing the number of cards will reset the game
            </Alert>         
            <Typography>Number of cards</Typography>
            <Slider
                aria-label="Number of cards"
                defaultValue={settingsContext.settings.cardsAmount}
                getAriaValueText={valuetext}
                step={2}
                marks={numberOfCardsMarks}
                min={4}
                max={10}
                valueLabelDisplay="auto"
                onChange={handleNumberOfCards}
                value={settingsContext.settings.cardsAmount}
            />
        </Box>);
}

export default SettingsAmountCards;