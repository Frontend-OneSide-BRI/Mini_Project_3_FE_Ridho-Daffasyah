//Image component
import React from "react";

const ImageComponent = ({className, alt, type}) => {
    return (
        <img
            className={className}
            src={
                `${type === "Monitor"
                    ? `/images/monitor-tv.png`
                    : type === "Tablet"
                        ? `/images/tablet.png`
                        : type === "Phone"
                            ? `/images/phone.png` 
                            : "https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/f511e96e-c4cd-49b1-9fbf-ca9d78e15b50/ID-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                }`
            }
            alt={alt}
        />
    )
};

export default ImageComponent;