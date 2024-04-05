import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    </Header>

<section className="about__story">
  <div className="container about__story-container">
    <div className="about__section-image">
      <img src={StoryImage} alt="Our Story image" />
    </div>
    <div className="about__section-content">
      <h1>Our Story</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos. Minus quae unde cumque. Sit qui voluptates architecto aliquid consequatur nemo at ab quam maxime nobis, laudantium eius quis et.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus voluptas maiores maxime inventore sit optio commodi! Accusamus, asperiores doloribus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</p>
    </div>
  </div>
</section>

<section className="about__vision">
  <div className="container about__vision-container">
    <div className="about__section-content">
      <h1>Our Vision</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos. Minus quae unde cumque. Sit qui voluptates architecto aliquid consequatur nemo at ab quam maxime nobis, laudantium eius quis et.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus voluptas maiores maxime inventore sit optio commodi! Accusamus, asperiores doloribus!</p>
     
    </div>
    <div className="about__section-image">
      <img src={VisionImage} alt="Our Story image" />
    </div>
  </div>
</section>

<section className="about__mission">
  <div className="container about__mission-container">
    <div className="about__section-image">
      <img src={MissionImage} alt="Our mission image" />
    </div>
    <div className="about__section-content">
      <h1>Our Mission</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos. Minus quae unde cumque. Sit qui voluptates architecto aliquid consequatur nemo at ab quam maxime nobis, laudantium eius quis et.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus voluptas maiores maxime inventore sit optio commodi! Accusamus, asperiores doloribus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</p>
    </div>
  </div>
</section>

    </>
  )
}

export default About
