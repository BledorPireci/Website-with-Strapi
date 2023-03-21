import React, {useState} from 'react';
import {NavTypes} from "../../../lib/types";

const ButtonFrom:React.FC<NavTypes> = ({LeftBtn}) => {

    const [color, setColor] = useState("#00aee0")

    const handleMouseEnter = () => {
        setColor('#04294f')
    }
    const handleMouseLeave = () => {
        setColor('#00aee0')
    }

    return (
        <div className="btn-custom-shape">
            <svg width="162" height="50" viewBox="0 0 162 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_530_601)">
                    <path d="M10.4384 19.81C15.3772 7.82272 27.0609 0 40.0257 0H156C159.314 0 162 2.68629 162 6V44C162 47.3137 159.314 50 156 50H6.96132C2.69008 50 -0.213362 45.6635 1.41372 41.7144L10.4384 19.81Z"
                          fill={color}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                    />
                </g>
                <defs>
                    <filter id="filter0_i_530_601" x="0.95517" y="0" width="161.045" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_530_601"/>
                    </filter>
                </defs>
                {/*<text x="80" y="25" font-size="20" font-family="Verdana" fill="#ffffff" text-anchor="middle">*/}
                {/*    {LeftBtn}*/}
                {/*</text>*/}
            </svg>
        </div>
    );
}
export default ButtonFrom

