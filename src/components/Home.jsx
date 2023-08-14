import React from 'react'
import './Home.css'

const Home = () => {

  function scrollToTop(){
    window.scrollTo(0, 0);
}

  // `````````````````````````````````````script for slider starts...

  document.addEventListener('DOMContentLoaded', function () {
    //set initial slide index = 0
    var slideIndex = 0;

    //get all image elements
    var slides = document.getElementsByClassName('slide-image');

    //function to show the current slide
    function showSlide() {
      //hide all slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      //display the current slide
      slides[slideIndex].style.display = "block";
    }

    //function to show the previous slide
    function prev() {
      //decrease the slide index
      slideIndex--;

      //wrap around the last slide if index goes below 0
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      //show the updated slide
      showSlide();
    }

    //function to show the next slide
    function next() {
      //increase the slide index
      slideIndex++;

      //wrap around to the first slide if index goes beyond the last slide
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      //show the updated slides
      showSlide();
    }

    //function to automate slides
    function startSlide() {
      setInterval(next, 5000);
    }

    //call the showSlide function initially to display the fist slide
    showSlide();

    //start the slide
    startSlide();
  });

  // ````````````````````````````````````````script for slider ends...



  return (
    <>
      <div className="container">

        <section className='top-insights'>

          

          <div className="slider">

            {/* <div className="left-sidebar">
              <div className="sidebar">
                <h2>My Sidebar</h2>
                <ul>
                  <li><a to="#home">Home</a></li>
                  <li><a to="#about">About</a></li>
                  <li><a to="#services">Services</a></li>
                  <li><a to="#contact">Contact</a></li>
                </ul>
              </div>
            </div> */}


            <div className="slide">
              <img src="https://source.unsplash.com/997x501/?cultivation" alt="image1" className="slide-image" width="500" height="100" />
              <img src="https://source.unsplash.com/997x501/?agriculture" alt="image2" className="slide-image" width="500" height="100" />
              <img src="https://source.unsplash.com/997x501/?weather" alt="image3" className="slide-image" width="500" height="100" />
              <img src="https://source.unsplash.com/997x501/?irrigation" alt="image4" className="slide-image" width="500" height="100" />
              <img src="https://source.unsplash.com/997x501/?farm" alt="image5" className="slide-image" width="500" height="100" />
            </div>
            {/* <div className="navigation">
              <button onClick={prev()}> Left </button>
              <button onClick={next()}> Right </button>
            </div> */}
          </div>

          <div className="headlines">

            <marquee behavior="scroll" direction="left">
              <span>This is a news headlines.</span>
              <span>High court sanctioned delhi government...</span>
              <span>India touches lunar surface again...</span>
            </marquee>
            <marquee behavior="scroll" direction="left">
              <span>This is a news headlines.</span>
              <span>High court sanctioned delhi government...</span>
              <span>India touches lunar surface again...</span>
            </marquee>
          </div>

        </section>

        <section className='mid-insights'>
          <div className="para-box">
            <div className="para1">
                {/* <h2>Heading1</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?farmer" alt="image1" width="400" height="300" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sit adipisci eaque, temporibus ab, quas iure nesciunt repellat, dolorum illo in vero aut perferendis dolore? Voluptatum, in, esse labore impedit facilis quae blanditiis repellat ut exercitationem eveniet at optio ipsam quo quibusdam voluptatibus nam reprehenderit nihil dolor amet! Sequi dolorum facere maiores molestias provident exercitationem, quae veritatis nulla, magnam aliquid, eos ipsam hic perferendis fugit consequuntur itaque unde! Dolore ipsum placeat nihil molestiae corporis ut possimus, sit hic quos, nesciunt quisquam ipsa. Quas maxime fuga maiores deserunt rem quia, odit distinctio, velit nesciunt modi cum eos veritatis laboriosam, dolores sunt et dolore eveniet commodi reiciendis vitae at. Accusamus voluptates excepturi rem omnis sed voluptatem animi? 
              </p>
              
            </div>
            <div className="para1">
                {/* <h2>Heading2</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?food" alt="image1" width="400" height="300" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sit adipisci eaque, temporibus ab, quas iure nesciunt repellat, dolorum illo in vero aut perferendis dolore? Voluptatum, in, esse labore impedit facilis quae blanditiis repellat ut exercitationem eveniet at optio ipsam quo quibusdam voluptatibus nam reprehenderit nihil dolor amet! Sequi dolorum facere maiores molestias provident exercitationem, quae veritatis nulla, magnam aliquid, eos ipsam hic perferendis fugit consequuntur itaque unde! Dolore ipsum placeat nihil molestiae corporis ut possimus, sit hic quos, nesciunt quisquam ipsa. Quas maxime fuga maiores deserunt rem quia, odit distinctio, velit nesciunt modi cum eos veritatis laboriosam, dolores sunt et dolore eveniet commodi reiciendis vitae at. Accusamus voluptates excepturi rem omnis sed voluptatem animi? 
              </p>
            </div>
            <div className="para1">
                {/* <h2>Heading3</h2> */}
              <img className='para-img' src="https://source.unsplash.com/400x300/?weather" alt="image1" width="400" height="300" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sit adipisci eaque, temporibus ab, quas iure nesciunt repellat, dolorum illo in vero aut perferendis dolore? Voluptatum, in, esse labore impedit facilis quae blanditiis repellat ut exercitationem eveniet at optio ipsam quo quibusdam voluptatibus nam reprehenderit nihil dolor amet! Sequi dolorum facere maiores molestias provident exercitationem, quae veritatis nulla, magnam aliquid, eos ipsam hic perferendis fugit consequuntur itaque unde! Dolore ipsum placeat nihil molestiae corporis ut possimus, sit hic quos, nesciunt quisquam ipsa. Quas maxime fuga maiores deserunt rem quia, odit distinctio, velit nesciunt modi cum eos veritatis laboriosam, dolores sunt et dolore eveniet commodi reiciendis vitae at. Accusamus voluptates excepturi rem omnis sed voluptatem animi? 
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home