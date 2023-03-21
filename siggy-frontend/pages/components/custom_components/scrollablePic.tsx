import React from "react";
import {Clock, SiggyBrowser, TrafficLights} from "../../assets/assets";
import {TemplateTypes} from "../../../lib/types";
import Image from "next/image";
import ReactMarkdown from 'react-markdown'
import CustomImage from "./CustomImage";

interface Props {
    templates: TemplateTypes[]
}

const ScrollablePic:React.FC<Props> = ({templates}) => {
    return(
        <>
            {
                templates.map((item:any, index:number) =>{
                    return (
                        <div className="template" key={index}>
                            <div  className="template-browser">
                                <div className="template-header">
                                    <TrafficLights />
                                </div>
                                <div  className="template-body">
                                    <CustomImage image={item?.TemplatePhoto} alt={item.TemplateDescription} />
                                </div>
                                <div className="template-footer">
                                    <CustomImage image={item?.TemplateIcon} alt={item.TemplateDescription} />
                                    <h5><ReactMarkdown>{item.TemplateDescription}</ReactMarkdown></h5>
                                </div>
                            </div>
                        </div>
                )})
            }
        </>
    )
}
export default ScrollablePic;