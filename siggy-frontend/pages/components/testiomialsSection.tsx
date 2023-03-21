import React from 'react';
import TitleGroup from "./custom_components/tittleGroup";
import TestimonialProfile from "./custom_components/testimonialProfile";
import { TestimonialTypes} from "../../lib/types";


interface Props{
    title:string,
    description:string,
    img: React.ReactElement,
    TestimonialCard: TestimonialTypes[],
}

const TestimonialsSection:React.FC<Props> = ({title, img,description,TestimonialCard}) => {
    return (
        <section id="testimonialSection" className="signatureSection">
            <TitleGroup  title={title} description={description} img={img}/>
            <TestimonialProfile  testimonials={TestimonialCard}/>
        </section>
    );
}
export default TestimonialsSection;


