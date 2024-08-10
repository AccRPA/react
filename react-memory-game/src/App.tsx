import './App.css';
import Modal from './components/Modal';
import CardItem from './components/CardItem';
import Confetti from './components/Confetti';
import useCardGame from './hooks/useCardGame';
import { useState } from 'react';
import { ConfettiType } from './models/ConfettiType.enum';
import { ModalAction } from './models/ModalAction.enum';
import CardDeck from './services/CardDeck';

function App() {
  const cardDeck = CardDeck(5);
  const [cards, setCards] = useState(cardDeck);  
  const [showConfetti, setShowConfetti] = useState(ConfettiType.NONE);
  const [showModal, setShowModal] = useState(false);
  
  const [updateCard] = useCardGame(cards, setCards, setShowConfetti, setShowModal);

  const handleModalClick = (value: ModalAction) => {
    setShowConfetti(ConfettiType.NONE);
    setShowModal(false);
    setCards(CardDeck(5));
  };
  
  return (
    <>
      <div className='card-container'>
        { cards.map((card, index) => 
            <CardItem 
              card={card} 
              key={index}
              updateCard={updateCard(card)}
            ></CardItem>) }
      </div>
      <Confetti confettiType={showConfetti}></Confetti>
      <Modal showModal={showModal} onClick={handleModalClick}></Modal>
    </>
  )
}

export default App
