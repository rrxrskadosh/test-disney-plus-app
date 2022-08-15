import React from 'react';
import Navbar from '../NavBar/NavBar';
import ImgSlider from '../ImgSlider/ImgSlider';


import "../Home/Home.css"
import { BrowserRouter as Router } from "react-router-dom"

const Home = () => {


    return(
        <Router>
            <div className="home">
                <Navbar />
                <div className='container'>
                    <ImgSlider />
                    <h2>Home in construction!</h2>
                </div>
            </div>
        </Router>
    )
}

export default Home;