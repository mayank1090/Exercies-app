import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div className="container  footer__conatiner">
            <article>
                <Link to="/" className='logo'>
                <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo deleniti maiores pariatur omnis quas. Sequi aliquam, aliquid vel quos quia ut? Aliquid placeat itaque assumenda blanditi.</p>
                <div className="footer__socials">
                    <a href="https://linkdin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FaQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact us</Link>
                <Link to="/s">Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 MAYANK PALIWAL &copy; All Rights Reserved</small>
        </div>
     
    </footer>
  )
}

export default Footer
