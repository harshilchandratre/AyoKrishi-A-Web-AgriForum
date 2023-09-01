import React, { useEffect, useState } from 'react';
import './Home.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevSlide) => (prevSlide + 1) % 3); // Adjust the number based on the number of slides
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slide">
        <img
          src="/slide_img1.jpg"
          alt="image1"
          className={`slide-image ${slideIndex === 0 ? 'active' : ''}`}
        />
        <img
          src="/slide_img2.jpg"
          alt="image2"
          className={`slide-image ${slideIndex === 1 ? 'active' : ''}`}
        />
        <img
          src="/slide_img3.jpg"
          alt="image3"
          className={`slide-image ${slideIndex === 2 ? 'active' : ''}`}
        />
      </div>

      <div className="progress-dots">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot ${slideIndex === index ? 'active' : ''}`}
            onClick={() => setSlideIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;



{/* <img src="https://source.unsplash.com/1920x1080/?cultivation" alt="image1" className="slide-image" />
        <img src="https://source.unsplash.com/1980x1080/?agriculture" alt="image2" className="slide-image" />
        <img src="https://source.unsplash.com/1980x1080/?weather" alt="image3" className="slide-image" />
        <img src="https://source.unsplash.com/1980x1080/?irrigation" alt="image4" className="slide-image" />
        <img src="https://source.unsplash.com/1980x1080/?farm" alt="image5" className="slide-image" /> */}