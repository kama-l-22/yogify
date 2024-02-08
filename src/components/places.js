import React from 'react';

function Places({placename,placedes,img,onSelect}) {
    
    return (


        <div className='places' data-aos ='zoom-in-down' data-aos-duration='1000'>
            <img alt='gghhgjjg'
                onClick={onSelect}
                src={img}/>
            <div className='placedes'>
                <h2>{placename}</h2>
                <p>{placedes}</p>
                
            </div>
        </div>
    );
}
export default Places;