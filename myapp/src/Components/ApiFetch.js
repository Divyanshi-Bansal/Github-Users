import React from 'react';

export default function ApiFetch(){

    const api = await fetch('https://api.github.com/users');
    console.log(api);

    return(
        <React.Fragment>

        </React.Fragment>
    );
}