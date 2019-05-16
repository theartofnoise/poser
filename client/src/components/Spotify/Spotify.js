import React from 'react';
import axios from "axios"


function spotifyApi(){
    axios.get("/api/spotify").then(data => console.log(data.data))
    
}

// fetch('http://api.onemusicapi.com/20151208/release?title=Doolittle&artist=Pixies&user_key=fd1b1a7a1228f79bc732c96f3b79dc46&inc=images&maxResultCount=1',
// {   headers: {
//     'Content-Type': 'application/json',
//     // 'Content-Type': 'application/x-www-form-urlencoded',
// },
//     method: 'POST',
//     mode: 'no-cors',})
//   .then(function(response) {
//     return response;
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// postData('http://api.onemusicapi.com/20151208/release?title=Doolittle&artist=Pixies&user_key=fd1b1a7a1228f79bc732c96f3b79dc46&inc=images&maxResultCount=1')
//   .then(data => console.log(data)) // JSON-string from `response.json()` call
//   .catch(error => console.error(error));

// function postData(url = 'http://api.onemusicapi.com/20151208/release?title=Doolittle&artist=Pixies&user_key=fd1b1a7a1228f79bc732c96f3b79dc46&inc=images&maxResultCount=1', data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response); // parses JSON response into native Javascript objects 
// }


const Spotify = () => {
    spotifyApi();
    return (
        <div>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
};

export default Spotify;