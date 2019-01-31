import React from 'react';

import '../../sass/topNav.css';

const WebHeader = () => {
    return (
        <div className={"nav-root-main"}>
            <div className={"col-sm-3 col-md-2 col-xs-4"}>
                <a href={"#"} className={"icon"} />
            </div>
            <div className={"col-sm-9 col-md-10 col-xs-8"}>
                <div className={"nav-menu-options"}>
                    <a href={"#"}>APP</a>
                    <a href={"#"}>CLAIMS</a>
                    <a href={"#"}>LOGIN</a>
                </div>
                <div className={"nav-menu-contentRight"}>
                    <a href={"#"} className={"nav-menu-phone"}>1.888.242.5204</a>
                    <form className={"zipInput"}>
                        <input placeholder={"Enter Zip Code"}>
                        </input>
                        <button>
                            Check Your Rate
                        </button>
                    </form>
                </div>
                <div className={"menu-burger"} />
            </div>
        </div>
    )
}

export default WebHeader;