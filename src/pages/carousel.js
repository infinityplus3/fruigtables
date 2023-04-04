import React from "react";
import CarouselBasic from 'nuka-carousel';
import Left from '../assets/left.png'
import Right from '../assets/right.png'

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
        <CarouselBasic 
            wrapAround={true}
            renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                <button onClick={previousSlide} disabled={previousDisabled} style={{ border: 'none', background: 'transparent' }}>
                    <img src={Left} style={{ width: 30, height: 30 }} />
                </button>
            )}
            renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                <button onClick={nextSlide} disabled={nextDisabled} style={{ border: 'none', background: 'transparent' }}>
                    <img src={Right} style={{ width: 30, height: 30 }} />
                </button>
            )}
        >
            {slides}
        </CarouselBasic>
    );
}

export default Carousel2;