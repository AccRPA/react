import './App.css';
import Modal from './components/Modal';
import Confetti from './components/Confetti';
import useCardGame from './hooks/useCardGame';
import CardContainer from './components/CardContainer';
import { useContext, useState } from 'react';
import { ConfettiType } from './models/enum/ConfettiType.enum';
import { ModalAction } from './models/enum/ModalAction.enum';
import { CardDeckService } from './services/CardDeck.service';
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from './context/SettingsContext';

function App() {
  const settingsContext = useContext(SettingsContext);
  const cardDeck = CardDeckService.create(settingsContext.settings);

  const [cards, setCards] = useState(cardDeck);  
  const [showConfetti, setShowConfetti] = useState(ConfettiType.NONE);
  const [showModal, setShowModal] = useState(false);
  const [settings, setSettings] = useState(settingsContext.settings);

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
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <CardContainer cards={cards} updateCard={updateCard}></CardContainer>      
      <Confetti confettiType={showConfetti}></Confetti>
      <Modal showModal={showModal} onClick={handleModalClick}></Modal>
    </SettingsContext.Provider>
  )
}

export default App;