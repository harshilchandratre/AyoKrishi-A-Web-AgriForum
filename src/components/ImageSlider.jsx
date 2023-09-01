import React from 'react'
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="image1.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="image2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="image3.jpg" alt="Image 3" />
                </div>
            </Slider>
        </>
    )
}

export default ImageSlider