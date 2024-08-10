import { useRouteError } from "react-router-dom";

function ErrorBoundary(){
    let error:any = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    // return <div>Dang! There was an error</div>;
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorBoundary;