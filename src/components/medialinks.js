import React from 'react';
import Insta from './image/Insta.svg';
import facebook from './image/facebook.svg';
import linked from './image/linked.svg'
import twitter from './image/twitter.png'
export default function Medialinks() {
  return (
    <div className='medialinks'>
      <ul>
        <li  onClick={()=>{
          window.location.replace("https://www.instagram.com/");
        }}><img alt='nomediaimg' src={Insta} className='rotationalAnimation'></img><div className='text '>Insta</div></li>
        <li onClick={()=>{
          window.location.replace("https://www.facebook.com/");
        }}><img alt='nomediaimg' src={facebook}   className='rotationalAnimation'></img><div className='text'>Facebook</div></li>
        <li onClick={()=>{
          window.location.replace("https://www.linkedin.com/");
        }}><img alt='nomediaimg' src={linked}  className='rotationalAnimation'></img><div className='text'>LinkedIn</div></li>
        <li onClick={()=>{
          window.location.replace("https://twitter.com/");
        }}><img alt='nomediaimg' src={twitter}  className='rotationalAnimation'></img><div className='text'> Twitter</div></li>
      </ul>
    </div>
  )
}

