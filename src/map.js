import townMap from "./townMap.png";
import "./map.css"

export default function Map(){
    const myStyle={
        backgroundImage:"url('+townMap+')",
        height:'100vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return(
        <>
        <div style={myStyle}>
        <h1>Town Map</h1>
        <img class="townMap" src={ require('./townMap.png') } alt="townMap"/>
        <img class="supermarket" src={ require('./supermercado.png') } alt="supermarket"/>
        <img class="clothesShop" src={ require('./ropa.png') } alt="clothes shop"/>
        <img class="barn" src={ require('./barn.png') } alt="barn"/>
        <img class="school" src={ require('./escuela.png') } alt="school"/>
        </div>
        </>
    )
}