import React,{useState} from 'react';
import Getstartbutton from './getstartbutton';
import Medialinks from './medialinks';
function Hero(props) {

    const [Start,setStart] = useState(false)
    return (
        <div className='Thehero' data-aos ='zoom-in' data-aos-duration='2000'>
            <h1>An easier Yoga,each time</h1>
            <p>Imagine checking one place for your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers.</p>
            <Getstartbutton value={Start ? "Started" : "Get Started"} onselect={()=>{
                setStart(!Start);
            }}  />

            <Medialinks/>
        </div>
    );
}

export default (Hero);