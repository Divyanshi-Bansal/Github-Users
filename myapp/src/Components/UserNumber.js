import React from 'react';
import '../styles/UserNumbercss.css';

export default function Usernumber(props){
    return(
        <div className='info-box'>
            <h3 className='name'>{props.heading}</h3>
            <h3 className='number'>{props.number}</h3>
        </div>
    );
}