import React from 'react';
import TopSectionDP from './TopSectionDP';
import Hero2cards from './hero2cards';
function Hero2(props) {
    return (
        <>
        <div className='flex' data-aos='zoom-out'>
            <TopSectionDP  toph2={'Plan like a Pro'} topp={'Unlock premium features like offline access, unlimited attachments, flight deals, export to Google maps, and '}
            topspan={'much more'}/>
        </div>

        <Hero2cards/>
        </>
    );
}

export default React.memo(Hero2);