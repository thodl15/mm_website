import React from 'react';

import '../../sass/nav.css';
import mmLogo from './../../img/logo-metromile-white.png';
import burger from './../../img/hamburger_white.svg';

const WebHeader = () => {
    return (
        <div className={"nav-root-main"}>
            <div className={"col-sm-3 col-md-2 col-xs-4"}>
                <img src={mmLogo} className={"icon"} />
            </div>
            <div className={"col-sm-9 col-md-10 col-xs-8"}>
                <img src={burger} className={"menu-burger"} />
            </div>
        </div>
    )
}

export default WebHeader;