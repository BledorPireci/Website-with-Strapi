import React from 'react';
import TitleGroup from "./custom_components/tittleGroup";
import {SiggyBrowser, SiggyBrowser2, TrafficLights} from "../assets/assets";
import ScrollablePic from "./custom_components/scrollablePic";
import {TemplateTypes, TitleTypes} from "../../lib/types";

interface Props{
    TemplateCard: TemplateTypes
    SectionTitle: TitleTypes
}

const TemplateSection:React.FC<Props> = ({TemplateCard,SectionTitle}) => {
    return (
        <section id="templateSection" className="signatureSection">
            {SectionTitle?.Title && <TitleGroup titleGroup={SectionTitle} /> }
            <div className="templateContainer">
                <ScrollablePic templates={TemplateCard} />
            </div>
        </section>
    );
}
export default TemplateSection;
