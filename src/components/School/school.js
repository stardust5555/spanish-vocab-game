import "./school.css"

import { Link } from "react-router-dom"

export default function School(){
    return(
        <div className="School">
        <h1>School</h1>
        <Link to="/">
        <button>Back to Map</button>
        </Link>
        </div>
    )
}