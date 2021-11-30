import React from 'react';
import './Footer.css'
import footerImg from '../../images/protfolio_images/shohel.png'

const Footer = () => {
    return (
        <>
            <div className="bgColor px-5 mt-5 py-4">
                <div className="container">
                    <div className="text-center">
                        <img src={footerImg} style={{height: '100px',width: '100px'}} alt="" />
                        <h1>SHOHEL RANA</h1>
                       <div>
                       <span className="text-center icons  d-inline-flex justify-content-between">
                            <a href="https://www.facebook.com/gmshohel.tanvir.37/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.linkedin.com/in/shohel-rana-666842168/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                            <a href="https://github.com/shohel-rana1" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        </span>
                       </div>
                    </div>
                    <div className="mx-auto text-center">
                        <p><i className="far fa-copyright"></i>&nbsp; 2021. All rights reserved by Shohel Rana </p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Footer;