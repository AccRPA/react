import './App.css'
import { useState } from 'react'
import { useContext } from 'react';
import { GameContext } from './GameContext';
import Root from './Root';

function App() {
  const gameContext = useContext(GameContext);
  const [isConnected, setIsConnected] = useState(gameContext.isConnected);
  const [usersConnected, setUsersConnected] = useState(gameContext.usersConnected);
  const [userData, setUserData] = useState(gameContext.userData);
  
  const gameContextState = {
    isConnected, setIsConnected, 
    usersConnected, setUsersConnected,
    userData, setUserData
  };

  return <GameContext.Provider value={gameContextState}>
      <Root></Root>
    </GameContext.Provider>
}

export default App
