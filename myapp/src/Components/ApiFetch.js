import React,{useEffect} from 'react';
import UserCard from './UserCard';

export default function ApiFetch(){

    const getUsers = async() =>{
        const response = await fetch('https://api.github.com/users');
        const data = await response.json()
        console.log(data);
    }

    // while page reloading , it will call useeffect and this will call getusers function for updations.
    useEffect(() => {
        getUsers()
    }, [])

    return(
        <React.Fragment>
            <UserCard/>
        </React.Fragment>
    );
}