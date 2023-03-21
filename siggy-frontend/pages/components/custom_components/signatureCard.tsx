import React from 'react';
import {SignatureTypes} from "../../../lib/types";
import Image from "next/image";
import CustomImage from "./CustomImage";
interface Props{
    signature:SignatureTypes
}

const SignatureCard:React.FC<Props> = ({signature}) =>{
    return (
        <div className="signatureCard">
            <div className="signatureCardWrapper">
                {
                    signature.SignatureCard.map((card:any,index:number) => {
                        return(
                            // <Image key={index} src={`${process.env.NEXT_PUBLIC_STRAPI_PATH}${card?.attributes?.url}`} width={card?.attributes?.width} height={card?.attributes?.height}
                            //        alt="photo"
                            // />
                            <CustomImage image={} alt={}/>
                        )
                    })
                }

            </div>
        </div>
    );
}
export default SignatureCard
