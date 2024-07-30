import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Lobby } from './lobby';
import { ChatRoom } from './chat-room';
import { ErrorPage } from './error-page';
import { useRoute } from '../hooks/useRoute';

function RoutesApp(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            { useRoute("/lobby", <Lobby />) }
            { useRoute("/room/:id", <ChatRoom />) }
            <Route path='/error' element={ <ErrorPage /> } />
        </Routes>
    </BrowserRouter>
}

export { RoutesApp };