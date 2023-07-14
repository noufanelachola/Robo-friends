import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:"scroll" , height:"60vh" , border:"2px solid black" , marginInline:"0.75rem"}}> 
            {props.children}
        </div>
    );
}

export default Scroll;