import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_05hcelq', 'template_yeof81c', e.target, 'user_KYhLX0Mh0hhKpkn626l9T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className="pt-5 mx-auto" id="myContact">
            <div className="container contact-bg my-5 py-5 mx-auto">
                <div className="text-center">
                    <h5 style={{ color: '#2c7ae7', fontSize: '13px', margin: '0 0 10px' }}>Lets Talk</h5>
                    <h2 style={{ fontSize: '28px', color: 'white', fontWeight: 'bold' }}>Get In Touch</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-left text-white contact-info mt-5">
                            <h3>Contact Info:</h3>
                            <p>I am excited to hear from you. Fill free to knock directly if any needed.</p>
                            <div className="address-class">
                                <ul>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i>
                                        <span>29,khilkjet Road <br />Nayanagar, Khilkhet</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-mobile-alt"></i>
                                        <span>Phone: 017736363 <br />Phone: 0137664646</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-envelope-square"></i>
                                        <span>Email: gmshohel63@gmail.com <br />example@example.com</span>
                                    </li>
                                    <li>
                                        <i class="fab fa-linkedin"></i>
                                        <span>29,khilkjet Road <br />Nayanagar, Khilkhet</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="text-left">
                            <form className="contact-form" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <input type="email" name="user-email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <input type="text" name="subject" className="form-control" placeholder="Your Subject" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12">
                                        <textarea name="message" rows="5" className="form-control" placeholder="Message" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit">
                                        Send Message
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;