import './ChangeTheme.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext.js';

function ChangeTheme(){
    const themeContext = useContext(ThemeContext);

    function onChangeTheme(){
        themeContext.setTheme(themeContext.theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button className="theme-button" onClick={onChangeTheme}>
            { themeContext.theme === 'light' 
                ? <NightlightIcon></NightlightIcon>
                : <LightModeIcon></LightModeIcon>
            }
        </button>);
}

export default ChangeTheme;