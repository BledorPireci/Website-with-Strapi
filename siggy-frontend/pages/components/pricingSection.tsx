import React from "react";
import TitleGroup from "./custom_components/tittleGroup";
import PricingCard from "./custom_components/pricingCard";
import {PricingTypes} from "../../lib/types";

interface Props{
    title:string,
    description:string,
    img: React.ReactElement,
    Prices: PricingTypes[]
}

// const PricingSection:React.FC<Props> = ({title, img,description,Prices}) => {
const PricingSection:React.FC<Props> = (props) => {
    return(
        <section id="pricingSection" className="signatureSection">
            {/*<TitleGroup  title={title} description={description} img={img}/>*/}
            <PricingCard {...props}/>
        </section>
    )
}
export default PricingSection;