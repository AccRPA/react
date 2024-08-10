import { Card } from "../models/Card";
import CardItem from "./CardItem";

interface Props {
    cards: Array<Card>,
    updateCard: Function
}

function CardContainer({cards, updateCard}: Props){
    return (
        <div className='card-container'>
            { cards.map((card, index) => 
                <CardItem 
                    card={card} 
                    key={index}
                    updateCard={updateCard(card)}
                ></CardItem>) 
            }
        </div>
    );
}

export default CardContainer;