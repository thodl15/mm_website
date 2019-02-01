import React from 'react';

import './../../sass/footer.css';

import mmIcon from './../../img/m-logo.svg';
import mmTwitter from './../../img/twitter.svg';
import mmLinkedIn from './../../img/linkedin.svg';
import mmFacebook from './../../img/facebook.svg';

const WebFooter = () => {
    return (
        <div className={"webFooter"}>
            <div className={"footerLegal"}>
                <div><img src={mmIcon}  /></div>
                <div>
                    <a href={"#"}>Terms of Use </a> |
                    <a href={"#"}> Privacy Policy</a> |
                    <a href={"#"}> Licensing</a>
                </div>
                <div>
                    © 2019 Metromile Inc. Metromile's trademark may be used only
                    with permission from Metromile. All rights reserved. Some
                    insurance products are underwritten by insurers in the National
                    General Insurance Group. Other insurance products are underwritten
                    by Metromile Insurance Company.
                </div>
                <span><img src={mmTwitter}  /></span>
                <span><img src={mmLinkedIn} /></span>
                <span><img src={mmFacebook} /></span>
            </div>
            <div className={"footerLinks"}>
                <div><a href={"#"}>BLOG</a></div>
                <div><a href={"#"}>ABOUT</a></div>
                <div><a href={"#"}>PRESS</a></div>
                <div><a href={"#"}>CAREERS</a></div>
                <div><a href={"#"}>HELP CENTER</a></div>
                <div><a href={"#"}>AFFILIATE</a></div>
                <div><a href={"#"}>METROMILE REVIEWS</a></div>
            </div>
        </div>
    )
}

export default WebFooter;