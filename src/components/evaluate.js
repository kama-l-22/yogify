import React, { useEffect } from "react";
import Webcam from 'react-webcam';
import Navbar2 from "./navbar2";
import Footer from "./footer";

export default function Checking(){

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

    const webcamRef = React.useRef(null);

    return (
        <>
        <Navbar2 />
        <h1 className="rendertext">Try your best in this evaluation</h1>
      <div className="camera_container">
        
        <Webcam
            className="backgroundcamera"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'user' }}
        />
      </div>
      <div className="btn_grp">
            <button className="Rightbtn">Right</button>
            <button className="Wrongbtn">Wrong</button>
      </div>
      <Footer />
      </>
    );
}
