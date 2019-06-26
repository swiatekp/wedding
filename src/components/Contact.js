import React from 'react';
import PhoneImg from '../img/phone.svg';
import MailImg from '../img/mail.svg';
import '../css/Contact.scss';
import siteData from '../siteData.json';
const Contact = () => {
    return (
        <div className="slider-container no-overflow contact-container">
            <div className="phone-mail">
                <img src={PhoneImg} alt={PhoneImg} />
                <a href={`tel:${siteData.bride.phoneNumber}`}>{siteData.bride.phoneNumberFormatted}</a>
                <img src={MailImg} alt={MailImg} />
                <a href={`mailto:${siteData.bride.mail}`}>{siteData.bride.mail}</a>
            </div>
            <div className="phone-mail">
                <img src={PhoneImg} alt={PhoneImg} />
                <a href={`tel:${siteData.groom.phoneNumber}`}>{siteData.groom.phoneNumberFormatted}</a>
                <img src={MailImg} alt={MailImg} />
                <a href={`mailto:${siteData.groom.mail}`}>{siteData.groom.mail}</a>
            </div>
        </div>
    );
}

export default Contact;