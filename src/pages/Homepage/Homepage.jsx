import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div className='Homepage'>
                <h1 className='Homepage-h1'>Kenny &nbsp; Seo</h1>
            </div>
            <div className='aboutme'>
                <h2>About Me</h2>
            </div>
            <div className='namecard'>
                <img className='photo' src="https://i.imgur.com/tp3CDA5.jpgs" alt="" />
                <p className='description'> As a recent graduate of the Software Engineering Immersive course at General Assembly, I've discovered the exciting world of programming! My time as a Sales Executive in the programmatic media space has made me aware of the lack of streamlined communication between customers' needs and product/engineering teams' roadmaps, and I look forward to helping bridge the gap on your team!</p>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
            </div>
            <div className='skillscard'>
                <div className='col1'>
                    <p className='skills-item'>HTML</p>
                    <p className='skills-item'>CSS</p>
                    <p className='skills-item'>Javascript</p>
                    <p className='skills-item'>Python</p>
                    <p className='skills-item'>Github</p>
                </div>
                <div className='col2'>
                    <p className='skills-item'>MongoDB</p>
                    <p className='skills-item'>Express</p>
                    <p className='skills-item'>React</p>
                    <p className='skills-item'>Node.js</p>
                    <p className='skills-item'>Mongoose</p>
                </div>
                <div className='col3'>
                    <p className='skills-item'>Google Oauth</p>
                    <p className='skills-item'>Passport</p>
                    <p className='skills-item'>Jquery</p>
                    <p className='skills-item'>PostgreSQL</p>
                    <p className='skills-item'>Heroku</p>
                </div>


            </div>
            <div className='education'>
                <h2>Education</h2>
            </div>
            <div className='educationcard'>
                <p>General Assembly: Software Engineering Immersive - 2020 </p>
                <p>University of Southern California: B.S. in Business Management - 2013</p>
            </div>
        </div>
    )
}

export default Homepage;