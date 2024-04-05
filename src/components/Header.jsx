import React from 'react'

const Header = ({title, image}) => {
  return (
    
    <header className='header'>
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="header background image" />
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id temporibus amet culpa, harum in.</p>
            </div>
        </div>
     
    </header>
  )
}

export default Header
