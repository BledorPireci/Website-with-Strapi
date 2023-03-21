import Link from 'next/link';
import React from 'react';
import {FooterTypes} from "../../lib/types";
import Image from "next/image";
import CustomImage from "./custom_components/CustomImage";


const Footer:React.FC<FooterTypes> = ({FooterLogo,FooterSocials, Copyright}) => {
    return (
        <footer>
                <div className="footerContainer">
                    <CustomImage image={FooterLogo?.Logo} alt={""}/>
                    <Link href={"#"}>
                        {Copyright}
                    </Link>
                    <div className="imageWrapper">
                            {
                                FooterSocials.map((item:any, index:number) => (
                                    <div key={index} className="imgContainer">
                                        <CustomImage image={item?.Icons} alt={""}/>
                                    </div>
                                ))
                            }
                    </div>
                </div>
        </footer>
    );
}
export default Footer;

