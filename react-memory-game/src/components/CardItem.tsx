import { JSX } from 'react';
import { Card } from "../Card";

interface Props {
    card: Card;
    visibleCards: number,
    updateCard: () => {}
}

function CardItem({card, visibleCards, updateCard}: Props): JSX.Element{
    const handleClick = () => {
        // already visible, don't do anything
        if (card.visible){
            return;
        }

        // click on more cards will not do anything
        if (visibleCards == 2){
            return;
        }

        // call update the current card. 
        // it will make it visible and re-render the parent component and therefore all the children
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