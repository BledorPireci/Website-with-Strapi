import React from 'react';
import {HeroBanner} from "../assets/assets";
import HandWrittenButton from "./custom_components/handWrittenButton";
import {HeroTypes} from "../../lib/types";
import Navbar from "./navbar";


const HeroSection:React.FC<HeroTypes> = ({ Description, Quote, Title}) => {
    return (
        <section id="heroSection" className="heroSection">
            <div className="heroWrapper">
                <HeroBanner/>
            </div>
            <div className="sectionWrapper">
                <div className="contentHero">
                    <div className="titleContainer">
                        <h1>{Title}</h1>
                        <h2>{Quote}</h2>
                    </div>
                    <div className="paragraphContainer">
                        <h5>{Description}</h5>
                    </div>
                    <div className="buttonWrapper">
                        <HandWrittenButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;

