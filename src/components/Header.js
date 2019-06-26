import React from 'react';
import '../css/Header.scss';
import siteData from "../siteData.json";
const Header = () => {
    return (
        <header>
            <h1>{`${siteData.bride.firstName} i ${siteData.groom.firstName}`}</h1>
            <h2>{siteData.weddingDate}</h2>
        </header>
    );
}
export default Header;