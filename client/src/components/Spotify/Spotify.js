import React from 'react';
import axios from "axios"


function spotifyApi(){
    axios.get("/api/spotify").then(data => console.log(data.data))
    
}



const Spotify = () => {
    spotifyApi();
    return (
        <div>
            hello
        </div>
    );
};

export default Spotify;