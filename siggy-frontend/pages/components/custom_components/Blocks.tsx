import HeroSection from "../heroSection";
import PricingSection from "../pricingSection";
import SignaturesSection from "../signaturesSection";
import TemplateSection from "../templateSection";
import TestimonialsSection from "../testiomialsSection";
import Footer from "../footer";
import Navbar from "../navbar";
import {ReactElement} from "react";

export interface Iblocks {
    [key: string]:  ReactElement,
    'Navigation':   ReactElement,
    'Hero' :  ReactElement,
    'Pricing':  ReactElement,
    'Signatures':  ReactElement,
    'Templates':  ReactElement,
    'Testimonials':  ReactElement,
    'Footer': ReactElement,
}

const blocks: Iblocks = {
    'Navigation':Navbar,
    'Hero' : HeroSection,
    'Pricing': PricingSection,
    'Signatures': SignaturesSection,
    'Templates': TemplateSection,
    'Testimonials': TestimonialsSection,
    'Footer':Footer,
}
export default blocks

//interface per blocks,