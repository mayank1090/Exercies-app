import React from 'react'
import Header from '../../components/Header'
import './contact.css'
import HeaderImage from "../../images/header_bg_2.jpg";
import {MdEmail} from 'react-icons/md'
import {IoIosChatbubbles} from 'react-icons/io'
import {IoLogoWhatsapp} from 'react-icons/io'
const Contact = () => {
  return (
    <>
     <Header title="Get In Touch" image={HeaderImage}/>
     <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:pali28913@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://facebook.com" target='_blank' rel='noreferrer noopener'><IoIosChatbubbles/></a>
          <a href="https://wa.me/+919111823829" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          
        </div>

      </div>
      
      </section>
    </>
  
  )
}

export default Contact
