import React from "react";

export interface NavTypes{
    id:number,
    NavLogo: [{
        Logo: {
            data: {
                id: number,
                attributes: {
                    url: string,
                    width: number,
                    height: number
                }
            }
        },
    }],
    HeaderLinks:{
        Label: string,
    },
    RightBtn:{
        ButtonRightText: string,
    }
    LeftBtn:{
        ButtonLeftText:string
    }
}
export interface TitleTypes {
    Title?:string,
    Description?:string
    titleArrow: StrapiImage

}
export interface HeroTypes {
    id: number,
    Title?:string,
    Quote?: string,
    Description?: string
}

export interface TestimonialTypes {
    id: number
    SectionTitle:{
        Title:string,
        Description:string,
    }
    TestimonialCard:{
        Profile : React.ReactElement,
        Name: string,
        Company:string,
        Description: string,
    }
}
export interface StrapiImage {
    data:{
        attributes:{
            url: string,
            height: number,
            width: number
        }
    }
}

export interface PricingTypes {
    id:number,
    SectionTitle:{
        Title:string,
        Description:string,
    },
    CardTitle: string,
    CardDescription: string,
    PricingList:{
        ListType: string,
        ListValue: number,
        Icon: StrapiImage
    },
    Pricing:string,
    Price:string,
    ButtonText:string,
}

// export interface SignatureCardData  {
//     attributes:{
//         url:string,
//         width:number,
//         height:number,
//     }
// }
//
// export interface SignatureCard {
//     id: number,
//     SignatureImage:{
//         data:SignatureCardData[]
//     }
// }
export interface SignatureTypes {
    id: number
    SectionTitle:{
        Title:string,
        Description:string,
    },
    SignatureCard:{
        SignatureImage:{
            data:{
                id:number,
                data:{
                    url:string,
                    width:string,
                    height:string,
                }
            }
        }

    }
}


export interface TemplateTypes{
    TemplateCard:{
        TemplatePhoto:{
            data:{
                id:number,
                attributes:{
                    url:string,
                    width:number,
                    height:number
                }
            }
        },
        TemplateIcon:{
            data:{
                id:number,
                attributes:{
                    url:string,
                    width:number,
                    height:number
                }
            }
        }
        TemplateDescription: string,
    }
}

export interface FooterTypes{
    id: number,
    FooterLogo:{
        Logo: {
            data: {
                id: number,
                attributes: {
                    url: string,
                    width: number,
                    height: number
                }
            }
        },
    }
    Copyright: string,
    FooterSocials:{
        Icons: {
            data: {
                id: number,
                attributes: {
                    url: string,
                    width: number,
                    height: number
                }
            }
        },
    },
}

export interface  Attributes {
    "Navigation": [
        {
            "id": number
        }
    ]
    "Hero": HeroTypes[],
    "Signatures": [
        {
            "id": number
        }
    ]
    "Templates": []
    "Pricing": [
        {
            "id": number
        }
    ],
    "Testimonials": [
        {
            "id": number,
            "Profile": React.ReactElement,
            "Company": string,
            "Description":string,
            "Name": string,
        }
    ],
    "Footer": [
        {
            "id": number
            "CopyRight": string
        }
    ]
}
