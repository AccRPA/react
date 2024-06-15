import { useState } from 'react'

import './App.css'

function App() {
  const userStorageKey = 'quizGameUser';
  const userSaved = window.sessionStorage.getItem(userStorageKey);
  const [userLoggedIn, setUserLoggedIn] = useState(!!userSaved);
  
  function handleClick(){
    window.sessionStorage.setItem(userStorageKey, 'User');
    setUserLoggedIn(true);
  }

  function removeUser(){
    window.sessionStorage.removeItem(userStorageKey);
    setUserLoggedIn(false);
  }

  if(userLoggedIn){
    // go to finding match and countdown to play
    return <>
        <span>The user exists { userLoggedIn } </span>
        <button onClick={removeUser}>Click to remove it</button>
    </>
  }else{
    // go to login
    return <button onClick={handleClick}>store user</button>
  }
}

export default App
