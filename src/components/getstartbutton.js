import React from 'react';

function Getstartbutton(props) {
    return (
        <>
            <button onClick={props.onselect} className={props.class}>{props.value} </button>
        </>
    );
}

export default Getstartbutton;