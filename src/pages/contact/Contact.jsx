import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Doloribus ducimus quibusdam eum ea cupiditate 
      voluptatibus.
    </Header>
    <section className="contact">
      <div className="contact_container">
        <div className="contact_wrapper">
          <a href="mailto:olsunkanmiboluwatife110@gmail.com" target="_blank" rel='nonreferrer noopener'><MdEmail/></a>
          <a href="https://www.facebook.com/profile.php?id=100063758204860" target="_blank" rel='nonreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+23408146913991" target="_blank" rel='nonreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact