import React,{useEffect , useState} from 'react';
import UserCard from './UserCard';

export default function ApiFetch(){

    const [users , setUsers] = useState([]);
    
    const getUsers = () => {
        fetch('https://api.github.com/users',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setUsers(myJson)
          });
      }

    // while page reloading , it will call useeffect and this will call getusers function for updations.
    useEffect(() => {
        getUsers()
    }, [])

    return(
        <React.Fragment>
            users.map()
        </React.Fragment>
    );
}