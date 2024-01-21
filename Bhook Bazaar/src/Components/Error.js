import { useRouteError } from "react-router-dom";
import error from "../Images/404.svg"

const Error = () => {
    const err = useRouteError()
    
    return (
        <div className="error">
<img src={error}></img>
<span>{err}</span>
        </div>
    )
}
export default Error;