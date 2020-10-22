import React from 'react';
import './Projectpage.css'

const Projectpage = () => {
    return (
        <div className='Projectpage'>
            <h1 className='Projectpage-h1'>My Projects</h1>
            <h2 id='project-name'>Connect 4</h2>
            <div className='project'>
                <img className='img' src="https://i.imgur.com/AdcGkzx.png" alt="" />
                <div className='overlay'>
                    <div className='text'>Connect 4 was built using Javascript/HTML/CSS, and sound effects were added to improve users' gameplay experience.</div>
                </div>
            </div>
            <h2 id='project-name'>Meeting Tracker</h2>
            <div className='project'>
                <img className='img' src="https://i.imgur.com/A4wlJZs.png" alt="" />
                <div className='overlay'>
                    <div className='text'>This is Meeting Tracker, an app where users can log the various meetings that they've recently been on.</div>
                </div>
            </div>
            <h2 id='project-name'>Find-a-Pet</h2>
            <div className='project'>
                <img className='img' src="https://i.imgur.com/AhumTmP.png" alt="" />
                <div className='overlay'>
                    <div className='text'>This is Find-a-Pet, an app where users can search adoptable animals around them.</div>
                </div>
            </div>
            <h2 id='project-name'>Stork</h2>
            <div className='project'>
                <img className='img' src="https://i.imgur.com/PC4ZGjU.png" alt="" />
                <div className='overlay'><
                    div className='text'>This is Stork, an app that allows expecting parents to sign up for an account then log names based on the gender of their baby.</div>
                </div>
            </div >
        </div>
    )
}

export default Projectpage;