import { JSX } from 'react';
import { CardModel } from "../models/Card.model";

interface Props {
    card: CardModel;
    updateCard: () => {}
}

function CardItem({card, updateCard}: Props): JSX.Element{
    
    const handleClick = () => {
        // already visible, don't do anything
        if (card.visible){
            return;
        }

        updateCard();
    }

    return <div onClick={handleClick} 
                className={`card ${card.visible ? 'visible' : 'hidden'} ${card.checked ? 'checked' : ''}`}>
                <div className='back'>{card.value}</div>
                <div className='front'>
                    <div>{card.emojiHtml}</div>
                </div>
        </div>;
}

export default CardItem;