import { useRef } from "react";
import { CardModel } from "../models/Card.model";
import { ConfettiType } from "../models/enum/ConfettiType.enum";
import { SettingsModel } from "../models/Settings.model";

function useCardGame(
        cardDeck: Array<CardModel>,
        setCardDeck: Function,
        setConfetti: Function,
        setModal: Function,
        settings: SettingsModel
    ){
    let initialCardDeck = [...cardDeck];
    const timeout = useRef(0);
    
    /** 
     * this method will update the current card 
     * and re-render the parent and therefore the children will get the changes
     * the children don't have state
     */ 
    const updateCard = (card: CardModel): any => {
        return () => {
            const visibleAmountCards = cardDeck.filter(card => !!card.visible && !card.checked)?.length || 0;
            
            // click on more cards will not do anything
            if (visibleAmountCards == 2){
                return;
            }
            
            // make the current card visible
            initialCardDeck = updateCardsInDeck(
                initialCardDeck,
                [
                    new CardModel(card.id, card.value, card.emojiCode, true, card.checked)
                ]
            );
            // re-render the parent component
            setCardDeck(initialCardDeck); 
    
            // if no other card is selected hide the current one after visibleTime
            if (visibleAmountCards == 0){
                timeout.current = window.setTimeout(() => {
                    initialCardDeck = updateCardsInDeck(
                        initialCardDeck,
                        [
                            new CardModel(card.id, card.value, card.emojiCode, false, card.checked)
                        ]
                    );
                    setCardDeck(initialCardDeck); 
                }, settings.cardTimeMsVisible * 1000);                
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
                        new CardModel(card1.id, card1.value, card1.emojiCode, false, card1.checked),
                        new CardModel(card2.id, card2.value, card2.emojiCode, false, card1.checked)
                    ]
                );
                setCardDeck(initialCardDeck); 
            }, settings.cardTimeMsVisible * 1000);
        
        }else{
            // if to card are the same, mark them as checked and show confetti
            initialCardDeck = updateCardsInDeck(
                initialCardDeck,
                [
                    new CardModel(card1.id, card1.value, card1.emojiCode, card1.visible, true),
                    new CardModel(card2.id, card2.value, card2.emojiCode, card2.visible, true)                    
                ]
            );
            setCardDeck(initialCardDeck); 
            startStopConfetti(ConfettiType.PRIDE);

            // if the game has finished run fireworks and show modal
            if (initialCardDeck.filter(card => !card.checked)?.length === 0){
                setTimeout(() => setModal(true), 500);
            }
        }
    };

    const updateCardsInDeck = (initCardDeck: Array<CardModel>, updatedCards: Array<CardModel>): Array<CardModel> => {
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
        }, 350);
    };

    return [ updateCard ];
}

export default useCardGame;