import React from "react";
import icon from './image/icon1.png';
import insta from './image/Insta.svg';
import linked from './image/linked.svg';
import twiter from './image/twitter.png';
import facebook from './image/facebook.svg';


export default function Footer(){
    return(
        <>
        <div className="footer_container">
            <div className="Detail1">
                <div className='footerbrand'>
                    <img className="footerimg" alt="noimagsds" src={icon}></img>
                    <h2>Yogify</h2>            
                </div>
                <div className="footerAddress" >
                    <p>12P&13P, Gundla Pocham Pally Village,<br />
                     Medchal District
                    Mumbai, Maharashtra. <br />
                    Phone number:  02224132752<br />
                    Email:Yogify@gmail.com</p>
                </div>
            </div>
            <div className="Detail2">
                <div className="footerbrand2">
                    <h2>Open Hours</h2>
                </div>
                <div className="footerAddress">
                    <p>Monday-Friday: 9:00AM-7:00PM<br />
                    Saturday: 10:30AM-8:00PM<br />
                    Sunday: Closed</p>
                </div>

            </div>
            <div className="Detail3">
                <div className="footerbrand2" >
                    <h2>Follow us on</h2>
                </div>
                <div className="footerlinks">
                    <img src={insta} className="footer3img" alt="linknotworking"></img>
                    <img src={facebook} className="footer3img" alt="linknotworking"></img>
                    <img src={twiter} className="footer3img" alt="linknotworking"></img>
                    <img src={linked} className="footer3img" alt="linknotworking"></img>
                    <p>Copyright 2020 Website.com.<br /> All Rights Reserved.</p>
                </div>

                  

            </div>
        </div>
        </>
    )
}