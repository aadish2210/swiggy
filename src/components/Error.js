import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h1>Oops!!</h1>
            <h2>{`Error ${err.status}`}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;