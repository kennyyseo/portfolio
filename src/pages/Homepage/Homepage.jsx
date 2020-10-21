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
                <p className='description'> As a recent graduate of the Software Engineering Immersive program at General Assembly, I've discovered the exciting world of programming! My time as a Sales Executive in the programmatic media space has made me aware of the lack of streamlined communication between customers' needs and product/engineering teams' roadmaps, and I look forward to helping bridge the gap on your team!</p>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
            </div>
            <div className='skillscard'>
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.js</p>
                <p>Javascript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Python</p>
                <p>Heroku</p>
                <p>Github</p>
                <p>Google Oauth</p>
                <p>Passport</p>
                <p>Jquery</p>
                <p>PostgreSQL</p>
            </div>
            <div className='education'>
                <h2>Education</h2>
            </div>
            <div className='educationcard'>
                <p className='educationlist'> As a recent graduate of the Software Engineering Immersive program at General Assembly, I've discovered the exciting world of programming! My time as a Sales Executive in the programmatic media space has made me aware of the lack of streamlined communication between customers' needs and product/engineering teams' roadmaps, and I look forward to helping bridge the gap on your team!</p>
            </div>
        </div>
    )
}

export default Homepage;