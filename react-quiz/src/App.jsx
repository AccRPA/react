import './App.css'
import { useState, useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { GameContext } from './core/GameContext';
import Root from './components/root/Root';
import ErrorPage from './components/error/Error-page';
import { socket } from './core/socket';
import { GameData } from './core/GameData';

function App() {
  const gameContext = useContext(GameContext);
  const [gameData, setGameData] = useState(gameContext.gameData);  
  const gameContextState = { gameData, setGameData };

  const deleteUser = (error, info) => {
    console.log(`Error: ${error}. ${info}`);
    socket.disconnect();
    gameContext.setGameData(new GameData());
  };

  return <GameContext.Provider value={gameContextState}>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onError={deleteUser}
      >
        <Root></Root>

      </ErrorBoundary>
    </GameContext.Provider>
}

export default App
