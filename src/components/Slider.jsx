import React from 'react'
import './Home.css'

const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="slide">
                    <img src="https://source.unsplash.com/997x501/?cultivation" alt="image1" className="slide-image" width="500" height="100" />
                    <img src="https://source.unsplash.com/997x501/?agriculture" alt="image2" className="slide-image" width="500" height="100" />
                    <img src="https://source.unsplash.com/997x501/?weather" alt="image3" className="slide-image" width="500" height="100" />
                    <img src="https://source.unsplash.com/997x501/?irrigation" alt="image4" className="slide-image" width="500" height="100" />
                    <img src="https://source.unsplash.com/997x501/?farm" alt="image5" className="slide-image" width="500" height="100" />
                </div>

                <div className="progress-dots">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
            </div>
        </>
    )
}

export default Slider