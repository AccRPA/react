import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';

function Home() {
    const userContext = useContext(UserContext);

    function handleChange(event){
        const name = event.target.value;
        userContext.setUserName(name);
    }

    return <div className="container">
            <div className="home">
                <h2>Simple chat</h2>
                <label>Enter a username</label>
                <input type="text" value={userContext.userName} onChange={handleChange}/>

                <Link to={'/lobby'} className={`button ${userContext.userName?.length === 0 ? 'button disabled-link' : ''}` }>Enter</Link>
            </div>
        </div>;
}

export { Home };