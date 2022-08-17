import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Ea, tenetur. consectetur 
      adipisicing elit. Ea, tenetur.
    </Header>


    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-img">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. 
            Sint ipsa incidunt dolore, minima 
            delectus labore explicabo debitis 
            esse? Cum, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Qui magni neque eos 
              quo! Quisquam, maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Porro, quas!
            </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
        
        <div className="about_section-content">
          <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. 
              Sint ipsa incidunt dolore, minima 
              delectus labore explicabo debitis 
              esse? Cum, doloremque.
            </p>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Qui magni neque eos 
                quo! Quisquam, maiores!
              </p>
        </div>
        <div className="about_section-img">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-img">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. 
            Sint ipsa incidunt dolore, minima 
            delectus labore explicabo debitis 
            esse? Cum, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Qui magni neque eos 
              quo! Quisquam, maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Porro, quas!
            </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About