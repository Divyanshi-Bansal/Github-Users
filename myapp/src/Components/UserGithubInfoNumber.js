import React from 'react';
import UserNumber from './UserNumber';
import '../styles/UserGithubInfoNumbercss.css';

export default function UserGithubInfoNumber(props){
    return(
        <div className='box'>
            <UserNumber heading={props.heading} number = {props.number}/>
            <UserNumber heading={props.heading} number = {props.number}/>
            <UserNumber heading={props.heading} number = {props.number}/>
        </div>
    );
}