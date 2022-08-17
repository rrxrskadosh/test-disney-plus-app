import React from 'react';
import Navbar from '../NavBar/NavBar';
import '../ContentDetails/contentDetails.css'

const ContentDetails = () => {
    <Navbar />
    return(
        <div className='container-details'>
            <h2>Hello Details</h2>
            <div className='background'>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EB8CE72116AFD256EB2F1ED45DB78566540B69BDDC2D24F83D27EED59368D11B/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </div>
            <div className='logo-movie'>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F0305C1993FA02BAB78E73487E3DB1B5572EE3B98F4E53DE1D1914EE01DBEAC1/scale?width=1440&aspectRatio=1.78&format=png" />
            </div>
            <div className='controls'>
                <button className='play-button'><span>PLAY</span></button>
                <button className='trailer-button'><span>Trailer</span></button>
            </div>
        </div>
    )
}

export default ContentDetails;