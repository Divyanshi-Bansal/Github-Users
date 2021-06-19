import React,{useEffect , useState} from 'react';
import UserCard from './UserCard';

export default function ApiFetch(){

    const [users , setUsers] = useState([]);
    
    const fetchedUrl = 'https://api.github.com/users';
    const getUsers = async (fetchedUrl) => {
        await fetch(fetchedUrl)
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

    console.log(users);

    const filtered = Object.values(users).filter(() =>{
      return getUsers(users.url)
    })

    return(
        <React.Fragment>
            {filtered.map((data) => {
                return <UserCard name = {data.name}/>
            })}
        </React.Fragment>
    );
}