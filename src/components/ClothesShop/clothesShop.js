import "./clothesShop.css"

import { Link } from "react-router-dom"

export default function ClothesShop(){
    return(
        <div className="ClothesShop">
        <h1>Clothes Shop</h1>
        <Link to="/">
        <button id="homepage">Back to Map</button>
        </Link>
        </div>
    )
}