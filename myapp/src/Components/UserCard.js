import React from 'react';
import UserGithubInfoNumber from './UserGithubInfoNumber';
import '../styles/Usercardcss.css';

export default function UserCard(props){
    return (
        <div className='card'>
            <div className='userimage'>
                <img className='user-Image' src='' alt='user github image'></img>
            </div>
            <div className='user-about'>
                <h2 className='username'>{props.name}</h2>
                <p className='name-below'>passionate learner</p>
                <UserGithubInfoNumber heading={props.heading} number = {props.number}/>
            </div>
        </div>
    );
}