import React from "react";
import './Image.css';

function Image() {
    return (
        <div className="image-gallery">
            <div>
                <img
                    src="http://echangesinternationaux.hec.ca/wp-content/uploads/2016/06/deakin.jpg"
                    alt="Uploaded"
                    style={{ width: '2750px', height: '900px' }} // Adjust these values
                />
            </div>
        </div>
    );
}

export default Image;
