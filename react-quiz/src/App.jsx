import './App.css'
import { useState } from 'react'
import { useContext } from 'react';
import { GameContext } from './core/GameContext';
import Root from './components/root/Root';

function App() {
  const gameContext = useContext(GameContext);
  const [gameData, setGameData] = useState(gameContext.gameData);  
  const gameContextState = { gameData, setGameData };

  return <GameContext.Provider value={gameContextState}>
      <Root></Root>
    </GameContext.Provider>
}

export default App
