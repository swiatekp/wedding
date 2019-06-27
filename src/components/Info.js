import React from 'react';
import '../css/Info.scss';
const Info = (props) => {
    return (
        <div className="slider-container no-overflow">
            <p>
                Mamy przyjemność zaprosić Was na nasz ślub.
            </p>
            <p>
                Ceremonia odbędzie się 2 maja 2020 roku o godzinie 16:00 w Kościele Pw. Świętego Józefa w Lesznie.
            </p>
            <p>
                Wesele odbędzie się w Dworku Banderoza w Osiecznej.
            </p>
            <button onClick={props.toggleApproachPopup} className="approach">
                Dojazd
            </button>
        </div>
    );
}

export default Info;