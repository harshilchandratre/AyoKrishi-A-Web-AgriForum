import React from 'react'
import './Home.css'
import Slider from './Slider';
import News from './News';

const Home = () => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // `````````````````````````````````````script for slider starts...





  // ````````````````````````````````````````script for slider ends...



  return (
    <>
      <div className="container">

        <section className='top-insights'>






          <Slider />




        </section>

        <section className='mid-insights'>
          <h1 className='mid-title'>🍀Learn </h1>
          <div className="para-box">
            <div className="para1">
              {/* <h2>Heading1</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?harvesting" alt="image1" width="400" height="300" />
              <p>
                <h2>Low-cost farming Technologies</h2>
                <b>Why it's important:</b> Low-cost or DIY technologies like rainwater harvesting, simple irrigation systems, and basic soil testing methods can significantly improve farming outcomes without requiring extensive technical knowledge.
                <b>What to learn:</b> Building and maintaining low-cost irrigation systems, rainwater harvesting techniques, and basic soil testing procedures using affordable and locally available materials.
              </p>

            </div>
            <div className="para1">
              {/* <h2>Heading2</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?smartphone" alt="image1" width="400" height="300" />
              <p>
                <h2>Smartphone usage for Agriculture</h2>
                <b>Why it's important:</b> Many farmers in developing countries own smartphones, making it a valuable tool for accessing information, market prices, weather forecasts, and agricultural apps.
                <b>What to learn:</b> Basic smartphone operations, using agricultural apps for market information, weather updates, and pest identification, and communication tools like WhatsApp for farmer groups.
              </p>
            </div>
            <div className="para1">
              {/* <h2>Heading3</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?internet" alt="image1" width="400" height="300" />
              <p>
                <h2>How to access Ayokrishi?</h2>
                <b>Why it's important:</b> Familiarity with agricultural mobile apps specific to the region or crop types can provide farmers with tools for market information, crop management, and accessing educational resources.
                <b>What to learn:</b> How to download, install, and navigate agricultural mobile apps like "AyoKrishi," understanding the app's features for market prices, crop advice, and record-keeping, and troubleshooting common issues.
              </p>
            </div>
          </div>
        </section>



        <section className='news-insights'>
          <h2 className="mid-title">🍁News</h2>
          <News />
        </section>






      </div>
    </>
  )
}

export default Home