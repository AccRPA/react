import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './ErrorPage';

function RoutesApp(){

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} ErrorBoundary={ErrorBoundary}/>            
            <Route path="/game" element={<App />} ErrorBoundary={ErrorBoundary} />            
            <Route path='/error' element={ <ErrorBoundary /> }/>
            <Route path='*' element={<ErrorPage code="404"/>}   />
        </Routes>
    </BrowserRouter>
}

export default RoutesApp;