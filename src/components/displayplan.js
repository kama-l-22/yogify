import React from 'react';
import TopSectionDP from './TopSectionDP';
import CardSectionDP from './cardsectionDP';

function Displayplan(props) {
    return (
        <div className='displayplan' id='about'>
            <div className='flex'>
            <TopSectionDP toph2={'Discover your next favorite postures'}
             topp={'Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community.'}
             topspan ={' See all Yoga meditation guides.'}/>
            </div>
            <CardSectionDP/>
        </div>
    );
}

export default Displayplan;