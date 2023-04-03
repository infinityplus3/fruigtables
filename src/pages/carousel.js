import React from "react";
import Carousel from 'nuka-carousel';

const Left = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{
            width: 58,
            paddingLeft: 10,
            opacity: 1
        }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    );
}

const Right = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{
            width: 58,
            paddingRight: 10,
            opacity: 1
        }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    );
}




const Carousel2 = (props) => {
    const slides = props.images.map((img, index) => (
        <img 
            src={img} 
            key={index}
            style={{
                width: '100%'
            }}
        ></img>
    ));

    return (
        <Carousel 
            wrapAround={true}
            renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                <button onClick={previousSlide} disabled={previousDisabled} style={{ border: 'none', background: 'transparent' }}>
                    <Left />
                </button>
            )}
            renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                <button onClick={nextSlide} disabled={nextDisabled} style={{ border: 'none', background: 'transparent' }}>
                    <Right />
                </button>
            )}
        >
            {slides}
        </Carousel>
    );
}

export default Carousel2;