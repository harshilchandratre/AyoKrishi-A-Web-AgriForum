import React from 'react';
import './Home.css';

const About = () => {
  return (
    <div className="about-container">
    <img className='para-img' src="https://source.unsplash.com/400x300/?trees" alt="image1" width="400" height="300" />
      <div className='about-card'>
        <h2 className='about-heading'>𝘞𝘩𝘰 𝘈𝘳𝘦 𝘞𝘦?</h2>
        <p className='about-description'>
          Welcome to <img className='about-logo' src='/ayogo.png'/> Ayokrishi the Farmer's Forum, a modern and dynamic community that connects farmers, enthusiasts, and experts from around the globe. Our mission is to create a platform for sharing knowledge, experiences, and innovative solutions in the world of agriculture.
        </p>
        <p className='about-description'>
          Whether you're a seasoned farmer with years of experience or someone just starting in the world of agriculture, you'll find valuable insights and a supportive community here. Our forum covers a wide range of topics, including cutting-edge crop cultivation techniques, sustainable farming practices, and advancements in livestock management.
        </p>
        <p className='about-description'>
          We believe in the power of collaboration and the importance of learning from one another. Join our discussions, ask questions, and share your own experiences with fellow members. Together, we can cultivate a thriving farming community for the future.
        </p>
        <p className='about-description'>
          Thank you for being a part of our Farmer's Forum. If you have any questions or suggestions, please don't hesitate to contact us on <a href="#" className="about-links fab fa-youtube"></a> <a href="#" className="about-links fab fa-x"></a> <a href="#" className="about-links fab fa-instagram"></a>.
        </p>
      </div>
    </div>

  );
};

export default About;
