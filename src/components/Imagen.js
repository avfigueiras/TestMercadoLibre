import React from 'react';

const Imagen = (props) => {
    return(
        <div>
            <img src={props.name} className='imagen' alt="logo"/>
       </div>
    );
}

export default Imagen;
