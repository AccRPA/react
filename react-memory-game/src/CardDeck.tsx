import { Card } from "./Card";

export class CardDeck {
    private static _cardDeck: Array<Card>;

    static getShuffledCardDeck(from: number, to: number): Array<Card>{
        if (!this._cardDeck){
            const cards: Array<Card> = [];
    
            for(let i = from; i <= to; i++){
                const card = new Card(i);
                cards.push(card, {...card});
            }
    
            this.shuffleCards(cards);
        }
        
        return this._cardDeck;
    }

    // Maybe not the best shuffle algorithm but it fulfills its purpose
    private static shuffleCards(array: Array<Card>): void{
        const shuffledArray = [...array];
        for (let i = 0; i < shuffledArray.length; i++){
            const index1 = Math.floor(Math.random() * (shuffledArray.length - 1));
            const index2 = Math.floor(Math.random() * (shuffledArray.length - 1));
            const temp = shuffledArray[index1];
            shuffledArray[index1] = shuffledArray[index2];
            shuffledArray[index2] = temp;
        }

        this._cardDeck = shuffledArray;
    }

    //const randomIndex = Math.floor(Math.random() * (5 - 1) + 1);
}