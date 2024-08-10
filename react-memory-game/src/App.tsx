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
import Settings from './components/Settings';

function App() {
  const settingsContext = useContext(SettingsContext);
  const cardDeck = CardDeckService.create(settingsContext.settings);

  const [cards, setCards] = useState(cardDeck);  
  const [showConfetti, setShowConfetti] = useState(ConfettiType.NONE);
  const [showModal, setShowModal] = useState(false);
  const [settings, setSettings] = useState(settingsContext.settings);

  const [updateCard] = useCardGame(cards, setCards, setShowConfetti, setShowModal, settings);
  const navigate = useNavigate();
  
  const handleModalClick = async (value: ModalAction) => {
    setShowModal(false);
    setShowConfetti(ConfettiType.NONE);
    
    if (value === ModalAction.PLAY){      
      handleResetGame();
    }else{
      navigate('/');
    }
  };
  
  const handleResetGame = () => {
    // turn back all the cards
    setCards((previous: any) => {
      return previous.map((card: any) => {
        return {
          ...card, visible: false
        }
      });
    });
    // and change the card deck 0.5s after since that is what the animation takes to finish
    setTimeout(() => setCards(CardDeckService.create(settings)), 500);
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <Settings resetGame={handleResetGame}></Settings>
      <CardContainer cards={cards} updateCard={updateCard}></CardContainer>      
      <Confetti confettiType={showConfetti}></Confetti>
      <Modal showModal={showModal} onClick={handleModalClick}></Modal>
    </SettingsContext.Provider>
  )
}

export default App;