import React from 'react';
import { NavLink } from 'react-router-dom'
const ApproachChurch = (props) => {
    return (
        <div className="slider-container approach-show">
            <h3>Dojazd do kościoła</h3>
            <div className="approach-show-container">
                <p>
                    Kościół znajduje się przy ulicy Świętego Józefa w Lesznie, w pobliżu wiaduktu, obok Hotelu <i>Akwawit</i> oraz dawnego akwaparku. Poniżej przedstawiamy sposób na dojazd od strony Wschowy.
            </p>
                <button onClick={() => props.showImage("/location/church1.png")} className="approach-preview"></button>
                <p>
                    Po wjeździe do Leszna, należy poruszać się na wprost ulicą Szybowników aż do pierwszych świateł (bezpośrednio przed Wiaduktem).
                    Na światłach należy skręcić w lewo.
            </p>
                <button onClick={() => props.showImage("/location/church2.png")} className="approach-preview"></button>
                <p>
                    Bezpośrednio po skręcie w lewo, należy zająć prawy pas i skręcić w prawo.
            </p>
                <button onClick={() => props.showImage("/location/church3.png")} className="approach-preview"></button>
                <p>
                    Kościół znajduje się na wprost.
            </p>
                <button onClick={() => props.showImage("/location/church4.png")} className="approach-preview"></button>
            </div>
            <p>
                Źródło: <cite>Google Maps</cite>.
            </p>
            <NavLink className="return-link" to="/approach">&lt;&lt; Powrót</NavLink>
        </div>
    );
}

export default ApproachChurch;