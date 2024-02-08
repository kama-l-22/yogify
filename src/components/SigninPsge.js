import React, { useEffect } from "react";
import icon from './image/icon1.png';
import facebook from './image/facebook.png';
import linked from './image/linkedin.png';
import google from './image/google.png';
import Input from "./input";
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function Button({cls,value,click,type}){
    return(
        <>
        <button type={type} className={cls} onClick={click} >{value}</button>
        </>
    )
}



export default function SigninPage(){

    useEffect(()=>{
    Aos.init();
    },[])

    const Navigate = useNavigate(null);
    const [Database,setDatabase] = useState([
        {Username: "Admin",Email:"Admin@gmail.com",Password:"123456789"}
    ])
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const changePage=()=>{
        Navigate('/Login')
     }

    const submit = (e)=>{
        e.preventDefault();
        setDatabase([...Database,{Username:Name,Email:Email,Password:Password}]);
        
        window.sessionStorage.setItem("userData",JSON.stringify(Database));
        Navigate('/Login');
    }

    return(
        <>
        <div className="Signup_container" data-aos="zoom-in">
            <div className="Signupchange_container">
                    <h1>Welcome Back !</h1>
                    <p>To keep connected with us please<br />login with your personal info </p>
                    <Button value="SignIn" cls="change_Login_btn" click={changePage} />
                </div>

            <form className="form_container" onSubmit={submit}>
            
            <div style={{width:180}} className='brand' >
                <img alt="noimagsds" src={icon}></img>
                <h1 style={{marginTop:15}}>Yogify</h1>
            </div>
                    <h1>Create Account</h1>
                    <div className="Social_media">
                        <div><img alt="no_socialnetwork" src={google} className="google rotationalAnimation "  /></div>
                        <div><img alt="no_socialnetwork" src={linked} className="linkedin rotationalAnimation " /></div>
                        <div><img alt="no_socialnetwork" src={facebook} className="facebook rotationalAnimation " /></div>
                    </div>
                    <div className="breakspace">
                        <hr/>
                        <p className="or">Or</p> 
                        <hr/>
                </div>
                <p>Use your email for registeration</p>
                <Input holder="Username" change={(e)=>{
                    setName(e.target.value)
                }} type="text" cls="sign_input" />
                <Input holder="Email" change={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                } type="email" cls="sign_input" />
                <Input holder="Password" change={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                } type="password" cls="sign_input" />
                <Button type="submit" value="SIGN UP" cls="signup_button" />
            </form>
            
            </div>

        </>
    )
}