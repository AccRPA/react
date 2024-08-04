import { Card } from "./Card";

export class CardDeck {
    static getShuffledCardDeck(from: number, to: number): Array<Card>{
        const cards: Array<Card> = [];

        for(let i = from; i <= to; i++){
            const card = new Card(i);
            cards.push(card, {...card});
        }

        // Maybe not the best shuffle algorithm but it fulfills its purpose
        function shuffleCards(array: Array<Card>): Array<Card>{
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

        return shuffleCards(cards);
    }
    //const randomIndex = Math.floor(Math.random() * (5 - 1) + 1);
}