import React, { useState, useEffect } from 'react';

import image1 from '/slide_img1.jpg'; // Replace with the actual path to your image
import image2 from '/slide_img2.jpg'; // Replace with the actual path to your image
import image3 from '/slide_img3.jpg';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define an array of image URLs
  const images = [image1, image2, image3];

  // const images = [
  //   'https://source.unsplash.com/1920x1080/?vegitables',
  //   'https://source.unsplash.com/1920x1080/?weather',
  //   'https://source.unsplash.com/1920x1080/?indian-farmer',
  // ];

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically scroll to the next image every 3 seconds
    const interval = setInterval(nextImage, 3000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider">
      <div className="slider-image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="slider-image"
        />
        <div className="slider-text">
        <div className="slider-logo">
          <img className='ayogo-main' src="/ayogo.png" alt="ayokrishi" />
          AyoKrishi
        </div>
          
          <p>🙏Welcome to AyoKrishi Knowledge Portal🙏</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
