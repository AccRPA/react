import { useState } from 'react'
import './App.css'
import { socket } from './socket';
import { useEffect } from 'react';

function App() {
  const userStorageKey = 'quizGameUser';
  const userSaved = window.sessionStorage.getItem(userStorageKey);
  const [userLoggedIn, setUserLoggedIn] = useState(!!userSaved);

  const [isConnected, setIsConnected] = useState(socket.connected);
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    // function onFooEvent(value) {
    //   setFooEvents(previous => [...previous, value]);
    // }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    //socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      //socket.off('foo', onFooEvent);
    };
  }, []);
  
  function handleClick(){
    window.sessionStorage.setItem(userStorageKey, 'User');
    socket.connect();
    setUserLoggedIn(true);
  }

  function removeUser(){
    window.sessionStorage.removeItem(userStorageKey);
    socket.disconnect();
    setUserLoggedIn(false);
  }

  if(userLoggedIn){
    // go to finding match and countdown to play
    return <>
        <span>{ isConnected ? 'Connected' : 'Disconnected' }</span>
        <br />
        <span>The user exists { userLoggedIn }</span>
        <button onClick={removeUser}>Click to remove it</button>
    </>
  }else{
    // go to login
    return <>
      <span>{ isConnected ? 'Connected' : 'Disconnected' }</span>
      <br />
      <button onClick={handleClick}>store user</button>
    </>
  }
}

export default App
