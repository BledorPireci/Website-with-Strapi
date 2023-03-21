import React from "react";
import Image from "next/image";
import {generateImagePath} from "../../../utils/helpers";
import {StrapiImage} from "../../../lib/types";

interface ImageProps {
    image: StrapiImage,
    alt: string
}

const CustomImage:React.FC<ImageProps> = ({image, alt = ""}) => {
    return (
        <Image
            src={generateImagePath(image?.data?.attributes?.url)}
            width={image.data.attributes.width}
            height={image?.data?.attributes?.height}
            alt={alt}
        />
    );
}

export default CustomImage