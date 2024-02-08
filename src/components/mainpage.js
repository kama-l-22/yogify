
import "../App.css";
import bgv4 from "./image/bgv4.mp4";
import Navbar from "./navbar";
import Hero from "./hero";
import Displayplan from "./displayplan";
import Hero2 from "./hero2";
import Searchsection from "./searchsection"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./footer";

function Mainpage(){
    useEffect(()=>{
        AOS.init();
        window.scrollTo(0,0)
      },[])
      return (
        <>
        <div className="App">
          <div className="backgroundvideo">
            <video autoPlay={true} muted loop id="bgvideo" controls={false}>
              <source src={bgv4}j />
            </video>
            <Navbar />
            <div className="flex">
              <Hero />
            </div>
          </div>
          <Displayplan />
            <Hero2 />
          <Searchsection/>
        
        </div>
        <Footer />
        </>
      );
}
export default Mainpage;