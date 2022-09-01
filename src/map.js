import "./map.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import Supermarket from "./components/Supermarket/supermarket"
import ClothesShop from "./components/ClothesShop/clothesShop"
import Farm from "./components/Farm/farm"
import School from "./components/School/school"


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