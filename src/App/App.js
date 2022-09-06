import "./App.css"
import { Link } from "react-router-dom"

export default function Map(){
    return(
        <>
            <h1>Town Map</h1>
            <img class="townMap" src={ require('./townMap.jpg') } alt="townMap"/>

            <Link to="/supermarket"><img class="supermarket" src={ require('./supermercado.png') } alt="supermarket"/></Link>
            <Link to="./clothesShop"><img class="clothesShop" src={ require('./ropa.png') } alt="clothes shop"/></Link>
            <Link to="./farm"><img class="barn" src={ require('./barn.png') } alt="barn"/></Link>
            <Link to="./school"><img class="school" src={ require('./escuela.png') } alt="school"/></Link>
        </>
    )
}