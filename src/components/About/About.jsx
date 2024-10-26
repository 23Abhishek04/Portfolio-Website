import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile from '../../assets/Profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile} alt=""  className='aboutprofile'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Fresher in FrontEnd Development trying to learn new Skills daily, I also have knowledge about Data Analyst in MS Excel.</p>
                    <p>Currently i am also working on BackEnd Development to become a Full Stack Developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MS Excel</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2</h1>
                <p>Self made Projects</p>
            </div>
            <div className="about-achievement">
                <h1>0</h1>
                <p>Clients Served</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
