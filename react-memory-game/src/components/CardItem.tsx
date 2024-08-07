import { JSX, MouseEventHandler } from 'react';
import { Card } from "../Card";

interface Props {
    card: Card;
    checkCard: MouseEventHandler
}

function CardItem({card, checkCard}: Props): JSX.Element{
    return <>
            <div className={`card ${card.visible}`} onClick={checkCard}>
                <div>{card.value}</div>
                <div>{card.visible ? 'Visible' : 'hidden'}</div>
                <div>{card.checked ? 'Checked' : 'normal'}</div>
            </div>
            {/* <div className={`card back`} onClick={handleClick}>Back</div> */}
        </>;
}

export default CardItem;