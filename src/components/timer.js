import React from "react";
import { useState,useEffect } from "react";
import './timer.css';
import { useNavigate } from "react-router-dom";
import Timervedio from "../vedious/timer.mp4"
import Getstartbutton from "./getstartbutton";

export default function Timer_Page(){

    const Navigate = useNavigate();
    const [totalSeconds, setTotalSeconds] = useState(3600);
    const [isActive, setIsActive] = useState(false);
   
    useEffect(() => {
      let interval;
   
      if (isActive) {
        interval = setInterval(() => {
          setTotalSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
   
      return () => clearInterval(interval);
    }, [isActive]);


    const changePage = ()=>{
        Navigate('/evaluate')
    }
   
    const formatTime = (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600)
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      if(minutes === 60){
        return `${String(hours).padStart(2,"0")} : ${String(0).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} `;
      }
      else{
      return `${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} `;
    };
  }
   
    const handleStart = () => {
      setIsActive(true);
    };
   
    const handleReset = () => {
      setIsActive(false);
      setTotalSeconds(3600);
    };

    const handlestop =() =>{
        setIsActive(false);
        setTotalSeconds(totalSeconds);
    }

    return(
        <>
        <div className='vedio_container'>
            <video className='background_vedio' autoPlay muted loop>
                <source src={Timervedio} type='video/mp4'></source>
            </video>
            <div className="timer_content">
                <div className="timer"><h1>Timer : {formatTime(totalSeconds)}</h1></div> 
                    <div className="button_block">
                        <button className="start-button" onClick={handleStart}>
                                Start
                            </button>
                        <button className="stop-button" onClick={handlestop} >Stop</button>    
                        <button className="reset-button" onClick={handleReset}>
                                Reset
                            </button>
                    </div>
            </div>
          
        </div>
        
        <Getstartbutton onselect={changePage} value="Evaluate Yourself" class="practice_btn" />
        </>
    )
}