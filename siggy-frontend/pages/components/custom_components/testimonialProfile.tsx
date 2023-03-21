import React from "react";
import {TestimonialTypes} from "../../../lib/types";
import CustomImage from "./CustomImage";

interface Props {
    testimonials: TestimonialTypes[]
}


const TestimonialProfile:React.FC<Props> = ({testimonials}) =>{
    return (
        <div className="testimonialProfile">
            {testimonials.map((item:any , index:number)=>(
                    <div className="testimonialProfileWrapper" key={index}>
                        <div className="profileInfo" >
                            <CustomImage image={item?.Profile}  alt={""}/>
                            <div className="profileSpecific">
                                <h3>{item.Name}</h3>
                                <h5>{item.Company}</h5>
                            </div>
                        </div>
                        <div className="profileDescription">
                            <p>{item.Description}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default TestimonialProfile;