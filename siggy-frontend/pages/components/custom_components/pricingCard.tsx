import React from 'react';
import {Bird, Bird2, PricingButtonShape} from "../../assets/assets";
import {PricingTypes} from "../../../lib/types";

import CustomImage from "./CustomImage";


 const PricingCard:React.FC<PricingTypes> = ({CardTitle,CardDescription,PricingList,Pricing,Price,ButtonText}) => {
    return (
        <div className="pricingCard">
            <div className="pricingContainer">
                <div className="birdWrapper">
                    <Bird />
                    <Bird2 />
                </div>
                <div className="headerCard">
                    <h3>{CardTitle}</h3>
                    <h5>{CardDescription}</h5>
                </div>
                <div className="contentCard">
                    <ul>
                        {PricingList.map((item:any, index:number) => {
                            return (
                                <li key={index}>
                                    {item?.ListType && <h3>{item.ListType}</h3>}
                                    {item.ListValue && <span>{item.ListValue}</span>}
                                    {item?.Icon?.data !== null &&
                                        <CustomImage image={item?.Icon} alt={item.title} />
                                    }
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footerCard">
                    <div className="footerCardContent">
                        <h3>{Pricing}</h3>
                        <h5>{Price}</h5>
                        <div className="buttonWrapper">
                            <PricingButtonShape />
                            <a className="buttonText">
                                {ButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PricingCard;

