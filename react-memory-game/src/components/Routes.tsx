import { BrowserRouter } from 'react-router-dom';
import LocationProvider from './LocationProvider';
import RoutesWithAnimation from './RoutesWithAnimation';

function RoutesApp(){

    return <BrowserRouter>
        <LocationProvider>
            <RoutesWithAnimation />
        </LocationProvider>        
    </BrowserRouter>
}

export default RoutesApp;