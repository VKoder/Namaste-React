import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="error">
            <h1>Heyy I am error</h1>
        </div>
    )
}
export default Error;