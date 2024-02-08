import React from "react";
import plane from './image/plane.png'
// import twitter from './image/twitter.png'
function CardDP({ bg ,des}) {
  console.log(bg);
  return (
    <div
      className="cardDP"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      data-aos="slide-up"
      data-aos-duration='1000'
      
    >
        <div className="carddes" >
            <h2>
                {des} 
            </h2>
            <div > 
                <img alt="Noplans" src={plane}></img>
                <p>Our Super Service</p>
              
            </div>
            <p className="likes">1000 Likes</p>
        </div>
    </div>
  );
}

export default CardDP;
