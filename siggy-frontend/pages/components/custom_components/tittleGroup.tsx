import React, {Fragment} from 'react';
import {TitleTypes} from "../../../lib/types";
import CustomImage from "./CustomImage";


interface Props {
    titleGroup: TitleTypes
}

const TitleGroup: React.FC<Props> = ({titleGroup}) => {
    console.log("titleGroup",titleGroup)
    return (
        <div>
            <div className="titleContainer">
                <h2>{titleGroup?.Title}</h2>
                <div className="innerTittle">
                    {titleGroup?.titleArrow && <CustomImage image={titleGroup?.titleArrow} alt={"img"}/>}
                    <h5>{titleGroup?.Description}</h5>
                </div>
            </div>
        </div>
    );
}
export default TitleGroup;

