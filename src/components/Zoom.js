import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomImage = (props) => {
    const { picture, handleZoom } = props;
    return (
        <div className="zoomImage_container">
            <p onClick={ () => handleZoom() }className="cancel_btn" >Back</p>
            <Zoom>
                <img
                alt="that wanaka tree"
                src={picture}
                className="zoomImage"
                />
            </Zoom>
        </div>
    )
}

export default ZoomImage;
