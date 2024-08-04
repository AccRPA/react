import { JSX } from 'react';
import { Card } from "../Card";

interface Props {
    card: Card;
}

function CardItem({card}: Props): JSX.Element{
    return <div className="card">{card.value}</div>;
}

export default CardItem;