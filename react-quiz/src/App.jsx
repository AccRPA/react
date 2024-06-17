import './App.css'
import { useState } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContext';
import Root from './Root';

function App() {
  const socketContext = useContext(SocketContext);
  const [isConnected, setIsConnected] = useState(socketContext.isConnected);
  const [usersConnected, setUsersConnected] = useState(socketContext.usersConnected);
  const socketContextStatus = {
    isConnected, setIsConnected, 
    usersConnected, setUsersConnected
  };

  return <SocketContext.Provider value={socketContextStatus}>
      <Root></Root>
    </SocketContext.Provider>
}

export default App
