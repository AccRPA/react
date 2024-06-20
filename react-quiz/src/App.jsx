import './App.css'
import { useState } from 'react'
import { useContext } from 'react';
import { GameContext } from './core/GameContext';
import Root from './components/root/Root';

function App() {
  const gameContext = useContext(GameContext);
  const [isConnected, setIsConnected] = useState(gameContext.isConnected);
  const [usersConnected, setUsersConnected] = useState(gameContext.usersConnected);
  const [userData, setUserData] = useState(gameContext.userData);
  const [partnerData, setPartnerData] = useState(gameContext.partnerData);
  
  const gameContextState = {
    isConnected, setIsConnected, 
    usersConnected, setUsersConnected,
    userData, setUserData,
    partnerData, setPartnerData
  };

  return <GameContext.Provider value={gameContextState}>
      <Root></Root>
    </GameContext.Provider>
}

export default App
