import { UserContext } from "../userContext";
import { useContext } from "react";

function User(){
    const userContext = useContext(UserContext);

    return <div>
        <label>User name: {userContext.userName}</label>
    </div>
}

export { User };