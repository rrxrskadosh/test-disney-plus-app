import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ImgSlider/ImgSlider.css"


const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>
      <Slider className='slider' {...settings}>
        <div>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </div>

        <div>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </div>

        <div>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </div>

        <div>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;