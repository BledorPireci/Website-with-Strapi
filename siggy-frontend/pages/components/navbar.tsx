import Link from 'next/link';
import React, {useState} from 'react';
import ButtonFrom from "./custom_components/buttonFrom";
import {NavTypes} from "../../lib/types";
import CustomImage from "./custom_components/CustomImage";


const Navbar:React.FC<NavTypes> = ({ NavLogo, HeaderLinks, RightBtn,LeftBtn}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <nav>
                <div className="brand">
                    <CustomImage image={NavLogo?.[0]?.Logo} alt={""}/>
                </div>
                <div className="links-wrapper">
                    <div className="navbarLinks">
                        <ul>
                            {HeaderLinks?.map((link:string, index:number) => <li key={index}><Link href="#">{link?.Label}</Link></li>)}
                        </ul>
                    </div>
                    <div className="navbarButtons">
                        <div className="test">
                            <ButtonFrom />
                            <a className="seeMore-btn">
                                {LeftBtn[0]?.ButtonLeftText}
                            </a>
                        </div>
                        <a className="seeApp-btn">
                            {RightBtn[0]?.ButtonRightText}
                        </a>

                    </div>
                    <button className="hamburger"  onClick={toggleDrawer}>
                        <div className="bar">

                        </div>
                    </button>
                    <nav className={`mobile-nav ${isOpen ? 'is-active' : ''}`}>
                        <div className="mobile-nav-links-wrapper">
                            <div className="ul-wrapper">
                                <ul className="bottom-ul">
                                    {HeaderLinks?.map((link:string, index:number) => <li key={index}><Link href="#">{link?.Label}</Link></li>)}
                                </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            </nav>
        </header>
    );
}
export default Navbar;
