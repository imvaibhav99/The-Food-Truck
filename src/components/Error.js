import { useRouteError } from "react-router-dom"; //a hook of react-router-dom used to show what type of error is occuring

export const Error = () => {
    const err = useRouteError(); 
    console.log(err);     //now it will show what error is occuring in the console
    return(
        <div>
            <h1>Something went wrong</h1>
            <h3>{err.status}:{err.statusText}</h3>  
        </div>
    );
};