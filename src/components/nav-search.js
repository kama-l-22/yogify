import React, { useState } from "react";
import se from "./image/se.gif";

function NavSearch(props) {
  const [navsearchvalue, changenavsearchvalue] = useState("");
  return (
      <form className='nav-search' onSubmit={(event) =>{
        event.preventDefault()
        // alert(`The Search word ${navsearchvalue}`)
        console.log(navsearchvalue);
        changenavsearchvalue(' ')
        
      }}>

      <input
        value={navsearchvalue}
        onChange={(event) => {
          changenavsearchvalue(event.target.value)  
        }}
      />
      <button type="submit">
        <img src={se}></img>
      </button>
    </form>
  );
}

export default NavSearch;
