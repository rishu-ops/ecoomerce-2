import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageContainerStyle = {
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '340px',
    objectFit: 'cover',
    filter: 'brightness(49%)', // Decrease brightness
    zIndex: 1,
  };

  const textStyle = {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '-169px',
    marginLeft: '17px',
    zIndex: 2,
    width: '100%',
    fontSize : "30px"
  };

  // Media query for smaller screens
  const mediaQueryStyle = {
    height: '250px', // Adjust the height for smaller screens
  };

  return (
    <Slider {...settings} style={{ ...mediaQueryStyle, height: '100%' }}>
      <div style={{ ...imageContainerStyle, ...mediaQueryStyle }}>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg"
          alt="Slide 1"
          style={{ ...imageStyle, ...mediaQueryStyle }}
        />
        <h2  style={{ ...textStyle, ...mediaQueryStyle }}>"Where Fashion Meets {<br />} Convenience."</h2>
      </div>

      <div style={{ ...imageContainerStyle, ...mediaQueryStyle }}>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg"
          alt="Slide 2"
          style={{ ...imageStyle, ...mediaQueryStyle }}
        />
      
      </div>

      <div style={{ ...imageContainerStyle, ...mediaQueryStyle }}>
        <img
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery02.jpg"
          alt="Slide 3"
          style={{ ...imageStyle, ...mediaQueryStyle }}
        />
      
      </div>
    </Slider>
  );
};

export default Carousel;
