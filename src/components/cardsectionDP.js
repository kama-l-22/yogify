import React from 'react';
import CardDP from './cardDP';
import twitter from './image/twitter.png'
import placeAus from './image/image1.png'
import placeEruo from './image/image2.png'
import placeLondon from './image/image3.png'
import placeParis from './image/image4.png'
function CardSectionDP(props) {
    return (
        <div className='cardsectionDP' >
            <div className='cardup'>
                <CardDP bg ={placeAus} des ={'Deep in explore'}></CardDP>
                <CardDP bg={placeEruo} des ={`Explore your body`}> </CardDP>
                <CardDP bg={placeLondon} des={'Blows up your life'}></CardDP>
                <CardDP bg={placeParis} des ={'Life line mediator'}></CardDP>

            </div>
            <div className='writings'>
                <h2>
                  Have tips of your own? Write a guide to share with other meditators like you!
                 
                </h2> 
                <div>
                <button> Write your own guide</button>
                </div>
            </div>
        </div>
    );
}

export default CardSectionDP;