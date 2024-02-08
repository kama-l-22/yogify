import React from 'react';

function TopSectionDP({toph2,topp,topspan}) {

    return (
        <div className='dptop' data-aos='zoom-out'>
            <h1>{toph2}</h1>
            <p>{topp}<span className='readMoreLink'>{topspan}</span></p>
        </div>
    );
}

export default TopSectionDP;