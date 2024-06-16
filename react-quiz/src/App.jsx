import { useState } from 'react'
import './App.css'
import { socket } from './socket';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }
    
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);
  
  function connect(){
    socket.connect();
    socket.emit('newPlayer', uuidv4(), 'test', 'avatar');
  }

  function disconnect(){
    socket.disconnect();
  }

  if(isConnected){
    // go to finding match and countdown to play
    return <>
        <span>The user is connected</span>
        <button onClick={disconnect}>Disconnect</button>
    </>
  }else{
    // go to login
    return <>
      <button onClick={connect}>Connect</button>
    </>
  }
}

export default App
