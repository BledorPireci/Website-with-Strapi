import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import SignaturesSection from "./components/signaturesSection";
import Footer from "./components/footer";
import {BlueArrow, GreenArrow, OrangeArrow, PinkArrow, YellowArrow} from "./assets/assets";
import TestiomialsSection from "./components/testiomialsSection";
import siggyBrowser from './assets/images/siggy_browser.png'
import TrafficLights from './assets/images/Traffic-Lights.svg'
import TemplateSection from "./components/templateSection";
import PricingSection from "./components/pricingSection";
import SignatureCard from "./components/custom_components/signatureCard";
import {Attributes, HeroTypes} from "../lib/types";
import Block from './components/custom_components/Block'
import TestimonialsSection from "./components/testiomialsSection";
import {log} from "util";


async function getData() {
    const myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer  ebbdfbfed0dd5270454ac649b7a3b1dfdc9206beef30add8a6f0c76198dca1def0e967e85d45a15078b3fd7e804bcf3e4da399cd982ee4eaba3fe2dc0427c58e0b2818f27cbbc1b116ac9ec6bdb026b6e27545b70c55ca307c8fe12cc1dd8e250bd3af8d328bb2f09154571d8f9e9d01f1a62b4f24ccacf447089b022f6eaf9a"
    );

    const requestOptions:any = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        // next: { revalidate: 10 }
    };
    const res = await fetch("http://localhost:1337/api/landing-page?populate=deep", requestOptions )
    return res.json()
}

export default function Index() {
    const [allData, setAllData] = useState<Attributes>()
    console.log(allData)
    useEffect(() => {
        (async () => {
            const response = await getData();
            setAllData(response?.data?.attributes)
        })()
    }, [])


    return (
        <>

            <section className="landingPage">
                {
                    allData ? Object.entries(allData).map(([theKey, theValue] , idx) => (

                        <React.Fragment key={idx}>
                            {
                                typeof theValue !== "string"
                                ? <>
                                        {theValue?.map((val:any, i: number) => {
                                            return <Block key={i} type={theKey} {...val} />
                                        })}

                                    </>
                                : null
                            }
                        </React.Fragment>
                    )) : null
                }
            </section>
        </>
    )
}







