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
import savingsWoman from './../../img/woman-driving.png';
import savingsGraph from './../../img/asset-2.png';

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
                <div className={"checkBtn"}>
                    <button>CHECK YOUR RATE</button>
                </div>
            </section>
            <section className={"mainSavings"}>
                <h2 className={"d-sm-block d-md-none sectionHeader"}>
                    Designed for low-mileage drivers
                </h2>
                <div className={"savingsUpperContent"}>
                    <div>
                        <img src={savingsWoman}/>
                    </div>
                    <div className={"savingsText"}>
                        <h2 className={"d-sm-none d-md-block"}>Designed for low-mileage drivers</h2>
                        <p>
                            Whether you barely drive, commute around town,
                            or use the car to get away on the weekends,
                            per-mile car insurance could cut your bill in half.
                        </p>
                        <div>
                            <p>Average Savings:</p>
                            <h2>$611/year</h2>
                        </div>
                    </div>
                </div>
                <div className={"savingsGraph d-sm-none d-md-block"}>
                    <img src={savingsGraph} />
                </div>
                <div className={"checkBtn"}>
                    <button>CHECK YOUR SAVINGS</button>
                </div>
            </section>
            <section className={"mainRoadtrip"}>
                <div>
                    <h2>All miles over 250/day are free</h2>
                    <p>With pay-per-mile insurance, you aren't charged for the miles
                        you drive above 250/day (150/day in New Jersey). So if you go
                        on a long trip, you'll save big.
                    </p>
                </div>
            </section>
            <section className={"mainCoverage"}>
                <div className={"coverageText"}>
                    <h2>Complete coverage options for less</h2>
                    <p>Just because we cost less, doesn't mean we compromise when it comes to
                        coverage. No matter what happens, we've got your back. With our complete
                        list of options, a U.S.-based claims team, and industry leading customer
                        service, it's all the coverage you need for a fraction of the cost.
                    </p>
                    <div className={"checkBtn"}>
                        <button>GET A FREE QUOTE</button>
                    </div>
                </div>
                <div className={"coverageChecklist"}>
                    <div>24/7 Roadside Assistance</div>
                    <div>Collision</div>
                    <div>Comprehensive</div>
                    <div>Bodily Injury</div>
                    <div>Property Damage</div>
                    <div>Under/Uninsured Motorist</div>
                    <div>Medical Payments Coverage</div>
                    <div>Rental Reimbursement</div>
                </div>
            </section>
        </div>
    )
}

export default WebMain;