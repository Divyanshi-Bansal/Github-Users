import React from 'react';
import UserNumber from './UserNumber';
import '../styles/UserGithubInfoNumbercss.css';

export default function UserGithubInfoNumber(){
    return(
        <div className='box'>
            <UserNumber/>
            <UserNumber/>
            <UserNumber/>
        </div>
    );
}