import React from "react";
import { useState,useContext,createContext } from "react";

const userContext = createContext();

export default function Vedio({img}){
    const values = useContext(userContext);
    console.log(values);
    const [hide,setHide] = useState(values)
    return(
        <>
        <div className={values? "show": "hide"}>
        <div className='vedio_container'>
            <img alt='noimagefound' src={img}></img>
        </div>
        <button className='practice_btn' onClick={()=>{
            setHide(!hide)
        }} >Open Practice Timer</button>
        </div>
        </>
    )
}
