import React from 'react';
import Navbar from '../NavBar/NavBar';
import ImgSlider from '../ImgSlider/ImgSlider';
import ContentCategory from '../ContentCategory/contentCategory';

import "../Home/Home.css"


const Home = () => {

    return(
        <div className="home">
            <Navbar />
            <div className='container'>
                <ImgSlider />
                <div className='cards'>
                    <div>
                        <img src="/images/img-card-disney.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video-disney.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/images/img-card-pixar.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video-pixar.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/images/img-card-star-wars.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video-star-wars.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/images/img-card-marvel.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video-marvel.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/images/img-card-national.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video-national.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <ContentCategory />
            </div>
        </div>
    )
}

export default Home;