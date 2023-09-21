import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    // console.log(error);
    
    return (
        <div>
            <h1>Oops!!</h1>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back to the previous page</p>
                    <Link to="/">Home</Link>
                </div>
            }
            <h3>{error.statusText || error.message}</h3>
        </div>
    );
};

export default ErrorPage;