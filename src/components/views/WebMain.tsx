// Design Comments:
// + Divided into multiple sections
// + Sections resize based on screen size
// * Main delineation seems to be half-width
// + Some images look to be resized based
//   on zoom amount, but we will ignore
//   that property for the time being.

import * as React from 'react';

import './../../sass/main.css';
import ReviewCard from '../core/ReviewCard';

import testimonials from './../../other/testimonials';
import rateCarHalf from './../../img/group-2.png';
import rateExample from './../../img/savings-calculation.png';

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
                <div className={"testDisplay"}>
                    {
                        testimonials.map(x => 
                            <div className={"col-md-12 col-lg-4 testimonial"}>
                                <ReviewCard
                                    {...x}
                                />
                            </div>
                        )
                    }
                </div>
            </section>
            <section className={"mainRate"}>
                <div className={"rateText"}>
                    <div>
                        <h2>Pay a low base rate</h2>
                        <p>Your car is covered and fully insured even when it's parked.</p>
                        <p className={"mmGreenText"}>Low rates start at $29.</p>
                    </div>
                    <div>
                        <h2>Then just pennies per mile</h2>
                        <p>With pay-per-mile, your bill is based on how far you drive.</p>
                    </div>
                </div>
                <div className={"imageContainer"}>
                    <img src={rateCarHalf} />
                </div>
                <div className={"imageContainer"}>
                    <img className={"rateExampleAdjust"} src={rateExample} />
                </div>
                <div className={"rateCheckBtn"}>
                    <button>CHECK YOUR RATE</button>
                </div>
            </section>
        </div>
    )
}

export default WebMain;