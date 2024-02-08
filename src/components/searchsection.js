import React, { useEffect, useState } from "react";
import TopSectionDP from "./TopSectionDP";
import searchglass from './image/searchglass.svg'
import Places from "./places";
import dehli from './image/place/image5.png'
import kerala from './image/place/image6.png'
import malasiya from './image/place/image7.png'
import maldives from './image/place/image8.png'
import mumbai from './image/place/image9.png'
import rajastan from './image/place/image10.png'
import tajmahal from './image/place/image11.png'
import tamilnadu from './image/place/image1.png'
import thailand from './image/place/image2.png'
import { useNavigate } from "react-router-dom";


function Searchsection(props) {
  const [dislist, changedislist] = useState([]);
  const [searchState, changesearchState] = useState("");
  const [placelist, changeplacelist] = useState([
    { place: "yoga1", placedes:'stretch your body', img:dehli},
    { place: "yoga2", placedes:'stretch your body', img:kerala},
    { place: "yoga3", placedes:'stretch your body', img:malasiya},
    { place: "yoga4", placedes:'stretch your body', img:maldives},
    { place: "yoga5", placedes:'stretch your body', img:mumbai},
    { place: "yoga6", placedes:'stretch your body', img:rajastan},
    { place: "yoga7", placedes:'stretch your body', img:tajmahal},
    { place: "yoga8", placedes:'stretch your body', img:tamilnadu},
    { place: "yoga9", placedes:'stretch your body', img:thailand},
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    let newlist = [...placelist].filter((item) => {
      if (item.place.includes(searchState.trimStart())) {
        return item;
      }
    });  
    console.log(newlist);
    changedislist(newlist);
  }, [searchState]);
  console.log(placelist);

 const submit = (event)=>{
    event.preventDefault()
    let newlist = [...placelist].filter((item) => {
        if (item.place === searchState.trimStart) {
          return item;
        }
      });  
      console.log(newlist);
      changedislist(placelist);
    // changesearchState('')
 }

 const handleseltectedblock = ()=>{
  navigate("/renderPage")
 }

  return (

    <div className="searchSection">
        <div className="flex">
         <TopSectionDP toph2={'Search Your favitore destination'}
             topp={'Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community.'}
             /></div>
      <form onSubmit={submit}>
        <div className="boxsearch" data-aos='flip-up' data-aos-duration="1500">
        <input
          value={searchState}
          type="text"
          onChange={(event) => {
            changesearchState(event.target.value);
          }}
        />
        <button><img src={searchglass}></img></button>
        </div>
      </form>
      <div className="displayPlace" data-aos="flip-left"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000">
        {dislist.map((item)=>{return(
          <>
            <Places onSelect={()=>{handleseltectedblock()}} img={item.img} placename={item.place} placedes={item.placedes} key={item.place+item.placedes}/>
            
            </>
        )})}
      </div>
    </div>
  );
}

export default React.memo(Searchsection);
