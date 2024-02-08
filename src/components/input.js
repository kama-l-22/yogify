import React from "react";

export default function Input({holder,type,cls,change}){
    return(
        <>
            <input className={cls} onChange={change} placeholder={holder} type={type} />
        </>
    )
}