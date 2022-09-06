import "./App.css"
import { BrowserRouter as Router, Routes, Link } from "react-router-dom"

export default function App(){
    return(
        <>

            <h1>Town Map</h1>
            <img className="townMap" src={ require('./townMap.jpg') } alt="townMap"/>
            <Link to="/supermarket"><img className="supermarket" src={ require('./supermercado.png') } alt="supermarket"/></Link>
            <Link to="./clothesShop"><img className="clothesShop" src={ require('./ropa.png') } alt="clothes shop"/></Link>
            <Link to="./farm"><img className="barn" src={ require('./barn.png') } alt="barn"/></Link>
            <Link to="./school"><img className="school" src={ require('./escuela.png') } alt="school"/></Link>

        {/* <Router>
            <Link to="/supermarket"><img className="supermarket" src={ require('./supermercado.png') } alt="supermarket"/></Link>
            <Link to="./clothesShop"><img className="clothesShop" src={ require('./ropa.png') } alt="clothes shop"/></Link>
            <Link to="./farm"><img className="barn" src={ require('./barn.png') } alt="barn"/></Link>
            <Link to="./school"><img className="school" src={ require('./escuela.png') } alt="school"/></Link>
        </Router> */}
        </>
    )
}