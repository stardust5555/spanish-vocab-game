import "./farm.css"

import { Link } from "react-router-dom"

export default function Farm(){
    return(
        <div className="Farm">
        <h1>Farm</h1>
        <Link to="/">
        <button>Back to Map</button>
        </Link>
        </div>
    )
}