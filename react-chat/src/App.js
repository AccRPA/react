import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { ChatRoom } from './components/chat-rooms';
import { Lobby } from './components/lobby';
import { UserContext } from './userContext';
import { useState, useContext } from 'react';

function App() {
  const userContext = useContext(UserContext);
  const [userName, setUserName] = useState(userContext.userName);
  const userContextValue = { userName, setUserName};

  return <UserContext.Provider value={userContextValue}>
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/lobby" element={<Lobby />} />
                  <Route path="/room/:id" element={<ChatRoom />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>;
}


export default App;
