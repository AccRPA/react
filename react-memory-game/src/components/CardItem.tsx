import { JSX, MouseEventHandler } from 'react';
import { Card } from "../Card";

interface Props {
    card: Card;
    checkCard: MouseEventHandler
}

function CardItem({card, checkCard}: Props): JSX.Element{
    return <div onClick={checkCard} className={`card ${card.visible ? 'visible' : 'hidden'} ${card.checked ? 'checked' : ''}`}>
            <div className='back'>Back</div>
            <div className='front'>
                <div>{card.value}</div>
            </div>
        </div>;
}

export default CardItem;