import './App.css';
import { UserContext } from './userContext';
import { useState, useContext } from 'react';
import { RoutesApp } from './components/routes-app';

function App() {
  const userContext = useContext(UserContext);
  const [userName, setUserName] = useState(userContext.userName);
  const userContextValue = { userName, setUserName};

  return <UserContext.Provider value={userContextValue}>
            <RoutesApp></RoutesApp>
        </UserContext.Provider>;
}

export default App;
