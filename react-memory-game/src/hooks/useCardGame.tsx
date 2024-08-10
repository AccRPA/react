import { useRef } from "react";
import { Card } from "../models/Card";
import { ConfettiType } from "../models/ConfettiType.enum";

function useCardGame(
        cardDeck: Array<Card>,     
        setCardDeck: Function,
        setConfetti: Function,
        setModal: Function
    ){
    let initialCardDeck = [...cardDeck];
    const visibleTime = 1500;
    const timeout = useRef(0);
    
    /** 
     * this method will update the current card 
     * and re-render the parent and therefore the children will get the changes
     * the children don't have state
     */ 
    const updateCard = (card: Card): any => {
        return () => {
            const visibleAmountCards = cardDeck.filter(card => !!card.visible && !card.checked)?.length || 0;
            
            // click on more cards will not do anything
            if (visibleAmountCards == 2){
                return;
            }
            
            // make the current card visible
            initialCardDeck = updateCardsInDeck(
                initialCardDeck,
                [{
                    ...card, 
                    visible: true
                }]
            );
            // re-render the parent component
            setCardDeck(initialCardDeck); 
    
            // if no other card is selected hide the current one after visibleTime
            if (visibleAmountCards == 0){
                timeout.current = setTimeout(() => {
                    initialCardDeck = updateCardsInDeck(
                        initialCardDeck,
                        [{
                            ...card, 
                            visible: false
                        }]
                    );
                    setCardDeck(initialCardDeck); 
                }, visibleTime);                
            }else{
                checkCards();
            }
        };
    }

    /**
    * this method will compare two cards
    * if they have the same value they will be mark as checked
    */
    const checkCards = () => {
        clearTimeout(timeout.current);

        // take both visible cards
        const [card1, card2] = initialCardDeck.filter(card => !!card.visible && !card.checked);

        // if the values are different wait visibleTime before hide them
        if(card1.value !== card2.value){        
            setTimeout(() => {
                card1.visible = false;
                card2.visible = false;
                initialCardDeck = updateCardsInDeck(
                    initialCardDeck,
                    [
                        {
                            ...card1, 
                            visible: false
                        },
                        {
                            ...card2, 
                            visible: false
                        },
                    ]
                );
                setCardDeck(initialCardDeck); 
            }, visibleTime);
        
        }else{
            // if to card are the same, mark them as checked and show confetti
            initialCardDeck = updateCardsInDeck(
                initialCardDeck,
                [
                    {
                        ...card1, 
                        checked: true
                    },
                    {
                        ...card2, 
                        checked: true
                    },
                ]
            );
            setCardDeck(initialCardDeck); 
            startStopConfetti(ConfettiType.PRIDE);

            // if the game has finished run fireworks and show modal
            if (initialCardDeck.filter(card => !card.checked)?.length === 0){
                setModal(true);
            }
        }
    };

    const updateCardsInDeck = (initCardDeck: Array<Card>, updatedCards: Array<Card>): Array<Card> => {
        const newCardDeck = [...initCardDeck];
        for(let updatedCard of updatedCards){
            const index = newCardDeck.findIndex(card => card.id === updatedCard.id);
            newCardDeck.splice(index, 1, updatedCard);
        }   
        return newCardDeck;
    }

    const startStopConfetti = (type: ConfettiType) => {
        setTimeout(() => {
            setConfetti(type);
            setTimeout(
                () => setConfetti(ConfettiType.NONE), 
                0
            );  
        }, 400);
    };

    return [updateCard, checkCards];
}

export default useCardGame;