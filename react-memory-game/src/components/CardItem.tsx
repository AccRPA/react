import { JSX } from 'react';
import { Card } from "../models/Card";

interface Props {
    card: Card;
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
                <div className='back'></div>
                <div className='front'>
                    <div>{card.value}</div>
                </div>
        </div>;
}

export default CardItem;