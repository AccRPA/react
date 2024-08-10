import { Card } from "../models/Card";

function CardDeck(cardAmount: number): Array<Card>{
    const minNumber = 1;
    const maxNumber = 9;
    const cardDeck = [];

    const getRandomNumber = () => {
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }

    const createRandomCard = (cardDeck: Array<Card>):Card => {
        let randomNumber = getRandomNumber();
        while (cardDeck.findIndex(card => card.value === randomNumber) !== -1){
            randomNumber = getRandomNumber();
        }
        return new Card(
            `${randomNumber}a`, 
            randomNumber
        );
    }

    const shuffleCards = (array: Array<Card>): Array<Card> => {
        const shuffledArray = [...array];
        for (let i = 0; i < shuffledArray.length; i++){
            const index1 = Math.floor(Math.random() * (shuffledArray.length - 1));
            const index2 = Math.floor(Math.random() * (shuffledArray.length - 1));
            const temp = shuffledArray[index1];
            shuffledArray[index1] = shuffledArray[index2];
            shuffledArray[index2] = temp;
        }
        return shuffledArray;
    }

    for (let i = 0; i < cardAmount; i++){
        const card = createRandomCard(cardDeck);
        const pairCard = {
            ...card, 
            id: `${card.value}b`
        };
        // added twice to have a pair
        cardDeck.push(card, pairCard);
    }

    return shuffleCards(cardDeck);
}

export default CardDeck;