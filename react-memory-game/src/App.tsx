import { Card } from './Card';
import { CardDeck } from './CardDeck';
import CardItem from './components/CardItem';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const visibleTime = 1500;
  const cards: Array<Card> = CardDeck.getShuffledCardDeck(1, 5);
  const visibleAmountCards = cards.filter(card => !!card.visible && !card.checked)?.length || 0;
  
  // this state is just to force the rerendering
  const [reRender, setReRenderState] = useState(false);
  const timeout = useRef(0);

  /** 
   * this method will update the current card 
   * and re-render the parent and therefore the children will get the changes
   * the children don't have state
   */ 
  const updateCard = (card: Card): any => {
    return () => {
      // make the current card visible
      card.visible = true;
      // re-render the parent component
      setReRenderState(!reRender); 

      // if no other card is selected hide the current one after visibleTime
      if (visibleAmountCards == 0){
        timeout.current = setTimeout((reRender: boolean) => {
          card.visible = false;
          setReRenderState(reRender); 
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
    const [card1, card2] = cards.filter(card => !!card.visible && !card.checked);

    // if the values are different wait visibleTime before hide them
    if(card1.value !== card2.value){
      
      // pass the current value of reRender and set it again after visibleTime, to re-render after setting the visibility      
      setTimeout((reRender: boolean) => {
        card1.visible = false;
        card2.visible = false;
        // use the previous value to rerender
        // this is the same as previous => !previous because it will take the value before changing the visibility
        setReRenderState(reRender); 
      }, visibleTime);
    
    }else{
        card1.checked = true;
        card2.checked = true;
        setReRenderState(!reRender);
    }
  }

  return (
    <div className='card-container'>
      { cards.map((card, index) => <CardItem card={card} key={index} visibleCards={visibleAmountCards} updateCard={updateCard(card)}></CardItem>) }
    </div>
  )
}

export default App
