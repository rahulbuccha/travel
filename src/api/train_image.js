import React from "react";

const Trainimage = (props) => {
    console.log("bro");
    const Image = props.Image.map((images) => {
        return <img src={images.webformatURL} alt="images" />;
    });
    return <div>{Image}</div>;
};

export default Trainimage;
