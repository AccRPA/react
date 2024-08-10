import { JSX, useContext } from 'react';
import { CardModel } from "../models/Card.model";
import { SettingsContext } from '../context/SettingsContext';
import { CardDisplayMode } from '../models/enum/CardDisplayMode.enum';

interface Props {
    card: CardModel;
    updateCard: () => {}
}

function CardItem({card, updateCard}: Props): JSX.Element{
    const settingsContext = useContext(SettingsContext);
    
    const handleClick = () => {
        // already visible, don't do anything
        if (card.visible){
            return;
        }

        updateCard();
    }

    return <div onClick={handleClick} 
                className={`card ${card.visible ? 'visible' : 'hidden'} ${card.checked ? 'checked' : ''}`}>
                <div className='back'></div>
                <div className='front'>
                    <div>
                        {
                            settingsContext.settings.cardDisplayMode === CardDisplayMode.EMOJI 
                            ? card.emojiHtml 
                            : card.value
                        }
                    </div>
                </div>
        </div>;
}

export default CardItem;