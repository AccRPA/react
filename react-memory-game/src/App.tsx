import { Card } from './Card';
import { CardDeck } from './CardDeck';
import CardItem from './components/CardItem';
import './App.css';

function App() {
  const cards: Array<Card> = CardDeck.getShuffledCardDeck(1, 5);
  
  return (
    <div className='card-container'>
      { cards.map((card, index) => <CardItem card={card} key={index}></CardItem>) }
    </div>
  )
}

export default App
