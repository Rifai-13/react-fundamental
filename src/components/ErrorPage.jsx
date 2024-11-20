import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
        <div>404 - Not Found</div>
        </>
    )
}

export default ErrorPage