import React from 'react';
import './Projectpage.css'

const Projectpage = () => {
    return (
        <div className='Projectpage'>
            <div className='projectpage'>
                <h1 className='projectpage-h1'>My &nbsp; Projects</h1>
            </div>
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
                    <div className='text'>Meeting Tracker is a tool that users can utilize to log all the various work meetings that they go on. Sign in through Google Oauth to get started.</div>
                </div>
            </div>
            <h2 id='project-name'>Find-a-Pet</h2>
            <div className='project'>
                <img className='img' src="https://i.imgur.com/AhumTmP.png" alt="" />
                <div className='overlay'>
                    <div className='text'>Use Find-a-Pet to find local adoptable animals. This was a group project with two of my peers, and my focus was on the front-end.</div>
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