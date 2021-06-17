import React from 'react';
import UserGithubInfoNumber from './UserGithubInfoNumber';
import '../styles/Usercardcss.css';

export default function UserCard(){
    return (
        <div className='card'>
            <div className='userimage'>
                <img className='user-Image' src='' alt='user github image'></img>
            </div>
            <div className='user-about'>
                <h2 className='username'>Divyanshi Bansal</h2>
                <p className='name-below'>passionate learner</p>
                <UserGithubInfoNumber/>
            </div>
        </div>
    );
}