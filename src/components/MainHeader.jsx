import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="conatiner main-header_container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Ftness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Eligendi recusandae 
            omnis incidunt minima, esse dolor?
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-img">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader