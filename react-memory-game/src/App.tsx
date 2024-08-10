import './App.css';
import Modal from './components/Modal';
import Confetti from './components/Confetti';
import useCardGame from './hooks/useCardGame';
import { useState } from 'react';
import { ConfettiType } from './models/enum/ConfettiType.enum';
import { ModalAction } from './models/enum/ModalAction.enum';
import { CardDeckService } from './services/CardDeck.service';
import { useNavigate } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import { SettingsModel } from './models/Settings.model';

function App() {
  const settings = new SettingsModel();
  const cardDeck = CardDeckService.create(settings);
  const [cards, setCards] = useState(cardDeck);  
  const [showConfetti, setShowConfetti] = useState(ConfettiType.NONE);
  const [showModal, setShowModal] = useState(false);
  const [updateCard] = useCardGame(cards, setCards, setShowConfetti, setShowModal);
  const navigate = useNavigate();

  const handleModalClick = (value: ModalAction) => {
    setShowModal(false);
    setShowConfetti(ConfettiType.NONE);
    
    if (value === ModalAction.PLAY){
      setCards(CardDeckService.create(settings));
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