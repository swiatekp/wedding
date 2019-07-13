import React from 'react';
import '../css/ShowImage.scss';
class ShowImage extends React.Component {
    state = {
        isZoomed: false
    }
    toggleZoom = () => {
        this.setState(prevState => ({
            isZoomed: !prevState.isZoomed
        }));
    }
    render = () => {
        return (
            <div className="showimage-background">
                <img className={this.state.isZoomed ? null : "img-not-zoomed"} onClick={this.toggleZoom} src={this.props.path} alt="obrazek" />)
                <button className="showimage-close-x" onClick={this.props.hideImage}>X</button>
                <button className="showimage-close-button" onClick={this.props.hideImage}>Zamknij</button>
            </div>
        );
    }
}

export default ShowImage;