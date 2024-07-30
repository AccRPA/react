import { Link } from "react-router-dom";

function ErrorPage(){
    return <div>The room does not exist, please select a different one. <Link to="/lobby" /></div>
}

export { ErrorPage };