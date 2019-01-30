// Design Comments:
// + Divided into multiple sections
// + Sections resize based on screen size
// * Main delineation seems to be half-width
// + Some images look to be resized based
//   on zoom amount, but we will ignore
//   that property for the time being.

import * as React from 'react';

import './../../sass/main.css';

const WebMain = () => {

    return (
        <div>
            <section className={"mainIntro"}>
                <h1>
                    Drive Less. Save More On Car Insurance.
                </h1>
                <h4>
                    Car insurance based on how much you drive.
                    Pay a low base rate then just pennies per mile.
                </h4>
                <form className={"zipInput"}>
                    <input className={"col-xs-9 col-xl-3"} placeholder={"Enter Zip Code"}>
                    </input>
                    <button>
                        Check Your Rate
                    </button>
                </form>

                <h4 className={"mobileCall"}>Call an agent at 1.888.242.5204</h4>
            </section>
            <section className={"mainTest"}>
                <h2 className={"sectionHeader"}>
                    Real People, Real Savings.
                </h2>
            </section>
        </div>
    )
}

export default WebMain;