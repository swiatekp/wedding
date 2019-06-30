import React from 'react';
import '../css/ShowImage.scss';
const ShowImage = (props) => {
    return (
        <div className="showimage-background">
            <img src={props.path} alt="obrazek" />)
            <button className="showimage-close" onClick={props.hideImage}></button>
        </div>
    );
}

export default ShowImage;