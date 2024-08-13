import { Routes, Route, useLocation } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import ErrorPage from './ErrorPage';
import { ErrorViewMode } from '../models/enum/ErrorViewMode.enum';

function RoutesWithAnimation() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} errorElement={<ErrorPage view={ErrorViewMode.INTERNAL_ERROR}/>}/>            
            <Route path="/game" element={<App />} errorElement={<ErrorPage view={ErrorViewMode.INTERNAL_ERROR}/>} />            
            <Route path='/error' element={ <ErrorPage view={ErrorViewMode.INTERNAL_ERROR}/> }/>
            <Route path='*' element={<ErrorPage view={ErrorViewMode.NOT_FOUND}/>}   />
        </Routes>
    );
}

export default RoutesWithAnimation;