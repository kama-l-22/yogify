import React from 'react';
import icon from './image/icon1.png';
import NavSearch from './nav-search';
import { useNavigate } from 'react-router-dom';


export default function Navbar(props) {

    const Navigate = useNavigate();

    return (
        <div className='header2' data-aos= 'fade-up'>
            {/* styling the logo and head-text */}
            <div className='brand'>
                <img alt="noimagsds" src={icon}></img>
                <h1 onClick={()=>{Navigate("/home")}}>Yogify</h1>            
                </div>

            {/* styling the link part */}

            <div className='links1' data-aos= 'fade-up'>
                <ul className=''>
                    <li onClick={()=>{Navigate("/home")}}>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
                <NavSearch/>
        </div>
    );
}