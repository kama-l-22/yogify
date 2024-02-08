import React from 'react';

function Hero2card({h2,p,img}) {
    return (
        <div className='hero2card' data-aos='slide-up'>
            <img alt='hero2img' src={img}/>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    );
}

export default Hero2card;