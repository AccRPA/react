import { Card } from './Card';
import { CardDeck } from './CardDeck';
import CardItem from './components/CardItem';
import './App.css';
import { useState } from 'react';

function App() {
  const cards: Array<Card> = CardDeck.getShuffledCardDeck(1, 5);
  const [reRender, setReRenderState] = useState(false);

  const checkCard = (card: Card) => {
    return () => { 
      if (card.visible){
        return;
      }
    
      const visibleCards = cards.filter(card => !!card.visible && !card.checked);
      
      // click on more cards will not do anything
      if (visibleCards?.length == 2){
          return;
      }

      card.visible = true;
      setReRenderState(!reRender);

      // at first, there were no cards visible
      if (visibleCards?.length == 0){
          return;
      }

      // take the other card visible
      const [card2] = visibleCards;

      // if the values are different wait 2sec before hide them
      if(card.value !== card2.value){
        // pass the current value of reRender and set it again after 2sec, to rerender after setting the visibility      
        setTimeout((reRender: boolean) => {
          card.visible = false;
          card2.visible = false;
          // use the previous value to rerender
          // this is the same as previous => !previous because it will take the value before changing the visibility
          setReRenderState(reRender); 
        }, 2000);
      }else{
          card.checked = true;
          card2.checked = true;
          setReRenderState(!reRender);
      } 
    }  
  }

  return (
    <div className='card-container'>
      { cards.map((card, index) => <CardItem card={card} key={index} checkCard={checkCard(card)}></CardItem>) }
    </div>
  )
}

export default App
