import React from 'react';
import './Resume.css';
import MERNstack from '../../images/protfolio_images/react-MEAN-vs_MERN.jpg';
import reactdev from '../../images/protfolio_images/react.png'
import webtdev from '../../images/protfolio_images/web-development.png'
import frontwebtdev from '../../images/protfolio_images/front-end.jpg'

const Resume = () => {
    return (
        <div className="main-div">
            <div className="card2">
                <div className="sliderImg">
                    <img src={MERNstack} alt="" />
                </div>
                <div className="card-img-overlay">
                    {/* <p className="text">Know More</p> */}
                </div>
            </div>
        </div>
    );
};

export default Resume;