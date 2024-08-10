import { CardModel } from "../models/Card.model";
import { SettingsModel } from "../models/Settings.model";
import { Emojis } from "../constants/Emojis";

function CreateCardDeck(settings: SettingsModel): Array<CardModel>{
    const minNumber = 1;
    const maxNumber = 9;
    const cardDeck = new Array<CardModel>();

    const getRandomNumber = (maxNumber: number, minNumber: number) => {
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    
    const getRandomEmojiCode = () => {
        return Emojis[Math.floor(Math.random() * (Emojis.length - 1))];
    }

    const getCardAndImageNumber = (cardDeck: Array<CardModel>) => {
        let randomNumber = getRandomNumber(maxNumber, minNumber);
        while (cardDeck.findIndex(card => card.value === randomNumber) !== -1){
            randomNumber = getRandomNumber(maxNumber, minNumber);
        }

        let randomEmojiCode = getRandomEmojiCode();
        while (cardDeck.findIndex(card => card.emojiCode === randomEmojiCode) !== -1){
            randomEmojiCode = getRandomEmojiCode();
        }

        return [randomNumber, randomEmojiCode];
    };

    const createRandomCard = (cardDeck: Array<CardModel>):CardModel => {
        let [randomNumber, randomEmoji] = getCardAndImageNumber(cardDeck);        
        return new CardModel(
            `${randomNumber}a`, 
            randomNumber,
            randomEmoji
        );
    }

    const shuffleCards = (array: Array<CardModel>): Array<CardModel> => {
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

    // divide the amount of card by 2, since half of them will be the pairs
    for (let i = 0; i < settings.cardsAmount / 2; i++){
        const card = createRandomCard(cardDeck);
        const pairCard = new CardModel(`${card.value}b`, card.value, card.emojiCode);
        // added twice to have a pair
        cardDeck.push(card, pairCard);
    }

    return shuffleCards(cardDeck);
}

export const CardDeckService = {
    create: CreateCardDeck
};