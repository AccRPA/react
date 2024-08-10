import './App.css';
import Modal from './components/Modal';
import CardItem from './components/CardItem';
import Confetti from './components/Confetti';
import useCardGame from './hooks/useCardGame';
import { useState } from 'react';
import { ConfettiType } from './models/ConfettiType.enum';
import { ModalAction } from './models/ModalAction.enum';
import CardDeck from './services/CardDeck';
import { useNavigate } from 'react-router-dom';
import CardContainer from './components/CardContainer';

function App() {
  const cardDeck = CardDeck(5);
  const [cards, setCards] = useState(cardDeck);  
  const [showConfetti, setShowConfetti] = useState(ConfettiType.NONE);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [updateCard] = useCardGame(cards, setCards, setShowConfetti, setShowModal);

  const handleModalClick = (value: ModalAction) => {
    setShowModal(false);
    setShowConfetti(ConfettiType.NONE);
    
    if (value === ModalAction.PLAY){
      setCards(CardDeck(5));
    }else{
      navigate('/');
    }
  };
  
  return (
    <>
      <CardContainer cards={cards} updateCard={updateCard}></CardContainer>      
      <Confetti confettiType={showConfetti}></Confetti>
      <Modal showModal={showModal} onClick={handleModalClick}></Modal>
    </>
  )
}

export default App;