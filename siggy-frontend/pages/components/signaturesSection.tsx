import React from 'react';

import TitleGroup from "./custom_components/tittleGroup";
import SignatureRow from "./custom_components/signatureRow";
import {SignatureTypes} from "../../lib/types";

interface Props{
    title:string,
    description:string,
    img: React.ReactElement,
    SignatureCard:SignatureTypes[]
}


const SignaturesSection:React.FC<Props> = ({title, img,description,SignatureCard}) => {
    return (
        <section id="signatureSection" className="signatureSection">
            <TitleGroup  title={title} description={description} img={img}/>
            <SignatureRow   signature={SignatureCard}/>
        </section>
    );
}
export default SignaturesSection;
