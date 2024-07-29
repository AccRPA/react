import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { ChatRoom } from './components/chat-rooms';

function App() {
  return <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room/:id" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>;
}

export default App;
