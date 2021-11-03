import { Link } from "react-router-dom"


const LinkButton = ({ text, route }) => {
    return <Link style={{
        padding: 10,
        textAlign: "center",
        backgroundColor: "blue",
        color: "white"
    }} to={route} >
    {text}</Link>
}

export default LinkButton