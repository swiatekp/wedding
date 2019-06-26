import React from 'react';
import PhoneImg from '../img/phone.svg';
import MailImg from '../img/mail.svg';
import '../css/Contact.scss';
const Contact = () => {
    return (
        <div className="slider-container no-overflow contact-container">
            <div className="phone-mail">
                <img src={PhoneImg} alt={PhoneImg} />
                <a href="tel:48667005456">48 667 005 456</a>
                <img src={MailImg} alt={MailImg} />
                <a href="mailto:alicja.pomorska44@gmail.com">alicja.pomorska44@gmail.com</a>
            </div>
            <div className="phone-mail">
                <img src={PhoneImg} alt={PhoneImg} />
                <a href="tel:48667005456">48 695 019 008</a>
                <img src={MailImg} alt={MailImg} />
                <a href="mailto:p.swiatek.piotr@gmail.com">p.swiatek.piotr@gmail.com</a>
            </div>
        </div>
    );
}

export default Contact;