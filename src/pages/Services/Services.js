import React from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    return (
        <div className="pt-5" id="myServices">
            <div className="container my-5 py-3">
                <div className=" text-center section-title">
                    <span className="subtitle">FEATURES</span>
                    <h2 className="title">What I Do</h2>
                </div>
                <div className="mt-5">
                    <SingleService></SingleService>
                </div>
            </div>
        </div>
    );
};

export default Services;