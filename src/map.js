import townMap from "./townMap.png";

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
        <img src={ require('./supermercado.png') } />
        <img src={ require('./ropa.png') } />
        <img src={ require('./barn.png') } />
        <img src={ require('./escuela.png') } />
        </div>
        </>
    )
}