import { UserContext } from "../userContext";
import { useContext } from "react";
import { Route, Navigate } from 'react-router-dom';

function useRoute(path, component){
    const userContext = useContext(UserContext);

    return <Route path={path} element={ userContext.userName?.length > 0 ? component : <Navigate to='/' />} />;
}

export { useRoute };