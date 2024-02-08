import React, { useState } from "react";
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar2 from "./navbar2";
import Vedio1 from '../vedious/vedio2.mp4';
import Getstartbutton from "./getstartbutton";
import TimerPage from "./timer";
import Footer from "./footer";


export default function Render1(){
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return(
        <>
        <div className="renderTop">
        <Navbar2 /></div>
        <h1 className="rendertext">Watch the Practice video and Explore it!</h1>
        <div className="vedio_container">
            <video className="background_vedio" autoPlay={true} muted loop controls>
                <source src={Vedio1}  type="video/mp4"></source>
            </video>
            </div>
            <div className="discription_block" >
                <p className="discription">Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame.</p>
            <Getstartbutton class="renderbutton" value="Open Practice timer" />
            </div>
            <TimerPage />
        <Footer />
        </>
        
    )
}