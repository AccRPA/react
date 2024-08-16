import { CardModel } from "../models/Card.model";
import CardItem from "./CardItem";

interface Props {
    cards: Array<CardModel>,
    cardAmount: number,
    updateCard: Function
}

function CardContainer({cards, cardAmount, updateCard}: Props){
    return (
        <div className={`card-container container-${cardAmount}`}>
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