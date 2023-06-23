import django from "../assets/img/django.png";
import react from "../assets/img/React.png";
import vue from "../assets/img/Vue.js.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Frameworks = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Frameworks</h2>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={vue} alt="Image" />
                                  <h5>Vue.js</h5>
                              </div>
                              <div className="item">
                                  <img src={react} alt="Image" />
                                  <h5>React</h5>
                              </div>
                              <div className="item">
                                  <img src={django} alt="Image" />
                                  <h5>Django</h5>
                              </div>
                              <div className="item">
                                  <h5>Razor Pages</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    )
  }