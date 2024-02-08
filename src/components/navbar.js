import React from 'react';
import icon from './image/icon1.png';
import NavSearch from './nav-search';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {

    const Navigate= useNavigate();

    return (
        <div className='header' data-aos= 'fade-up'>
            {/* styling the logo and head-text */}
            <div className='brand'>
                <img alt="noimagsds" src={icon}></img>
                <h1 onClick={()=>{Navigate("/home")}}>Yogify</h1>
            </div>

            {/* styling the link part */}

            <div className='links' data-aos= 'fade-up'>
                <ul className=''>
                    <li onClick={()=>{Navigate("/home")}}>Home</li>
                    <li><a href='#about'>About</a></li>
                    <li onClick={()=>{Navigate("/renderPage")}}>Posters</li>
                    <li onClick={()=>{Navigate("/Login")}} >Login</li>
                </ul>
            </div>
                <NavSearch/>
        </div>
    );
}
