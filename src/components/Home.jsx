import React from 'react'
import './Home.css'
// import Slider from './Slider';
import Slider from './Slider';

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

          <Slider />


          {/* <div className="headlines">

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
          </div> */}

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