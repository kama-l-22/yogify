import React, { useEffect } from "react";
import Input from "./input";
import icon from './image/icon1.png';
import facebook from './image/facebook.png';
import linked from './image/linkedin.png';
import google from './image/google.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function Button({value,cls,click}){
    return(
        <>
        <button className={cls} onClick={click} >{value}</button>
        </>
    )
}



export default function LoginPage(){
    
    useEffect(()=>{
        Aos.init()
    },[])

    const rawdata= window.sessionStorage.getItem("userData");
    const finaldata = JSON.parse(rawdata);
    console.log(finaldata);
    const Navigate = useNavigate(null);

    const changePage=()=>{
        Navigate('/Signup')
    }

    return(
        <>
        <div className="login_container" data-aos="zoom-in">
            <div style={{width:180,position:"absolute",marginTop:20}} className='brand' >
                    <img alt="noimagsds" src={icon}></img>
                    <h1 style={{marginTop:15}}>Yogify</h1>
                </div>
            <form className="form_container" >
            <h1>Login To Your Account</h1>
            <p>Login With Your Social Networks</p>
            <div className="Social_media">
                <div><img alt="no_socialnetwork" src={google} className="google rotationalAnimation " /></div>
                <div><img alt="no_socialnetwork" src={linked} className="linkedin rotationalAnimation " /></div>
                <div><img alt="no_socialnetwork" src={facebook} className="facebook rotationalAnimation " /></div>
            </div>

            <div className="input_container">
                <div className="breakspace">
                        <hr/>
                        <p className="or">Or</p> 
                        <hr/>
                </div>
                <Input holder="Username" />
                <Input holder="Password" />
                <Button value="Login" click={()=>{
                    Navigate("/home");
                }} cls="Login_btn"/>
                </div>
            </form>
            <div className="Loginchange_container">
                <h1>New Here?</h1>
                <p>Sign up and discover a great<br />amount of new opportunities</p>
                <Button value="Sign Up" click={changePage}  cls="change_signup_btn" />
            </div>
        </div>
        </>
    )
}