import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';

function Home() {
    const userContext = useContext(UserContext);

    function handleChange(event){
        const name = event.target.value;
        userContext.setUserName(name);
    }

    return <>
            <label>Enter a username</label>
            <input type="text" value={userContext.userName} onChange={handleChange}/>

            { userContext.userName?.length > 3 && 
                <Link to={'/lobby'}>Enter</Link> 
            }
        </>;
}

export { Home };