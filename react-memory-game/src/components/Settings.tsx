import { Alert, Box, Button, Container, Drawer, Slider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CardDisplayMode } from "../models/enum/CardDisplayMode.enum";
import { SettingsContext } from "../context/SettingsContext";
import { SettingsModel } from "../models/Settings.model";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    resetGame: Function
}

function Settings({resetGame}: Props){
    const settingsContext = useContext(SettingsContext);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleNumberOfCards = (_: Event, value: number | number[]) => {
        const amount = Array.isArray(value) ? value[0] : value;
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardsAmount: amount};
        });
        resetGame(amount);
    };

    const handleDisplayMode = (_: any, value: CardDisplayMode) => {
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardDisplayMode: value};
        });
    };   

    const handleShowEffects = (_: any, value: boolean) => {
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, showFireworks: value};
        });
    };   
    
    const handleTimeVisible = (_: Event, value: number | number[]) => {
        const time = Array.isArray(value) ? value[0] : value;
        settingsContext.setSettings((previous: SettingsModel) => {
            return {...previous, cardTimeMsVisible: time};
        });
    };

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

    function valuetext(value: number) {
        return `${value}`;
    }

    const DrawerList = (
        <Container>
            <Button  variant="text" onClick={toggleDrawer(false)}>
                <CloseIcon></CloseIcon>
            </Button>
            <Box role="presentation">
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
            </Box>
            <Box role="presentation">            
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
            </Box>
            <Box role="presentation">            
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
            </Box>
            <Box role="presentation">            
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
            </Box>
        </Container>        
        );
    return (
        <>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} 
                onClose={toggleDrawer(false)}
                BackdropProps={{style: {backgroundColor: 'rgba(200, 200, 200, 0.3)'}}}
            >
                {DrawerList}
            </Drawer>
        </>
    );
}

export default Settings;