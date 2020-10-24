import React from 'react';
import './Contactpage.css'

const Contactpage = () => {
    return (
        <div className='Contactpage'>
            <div className='contactpage'>
                <h1 className='contactpage-h1'>Get &nbsp; In &nbsp; Touch!</h1>
            </div>
            <h1 className='Contactpage-name'>Kenny Seo</h1>
            <div className='contact-items'>
                <div className='email'>
                    <img id='email-icon' src="https://i.imgur.com/fvMvSGO.png" alt="" />
                    <p className='my-info'>kennyyseo@gmail.com</p>
                </div>
                <div className='github'>
                    <img id='github-icon' src="https://i.imgur.com/LNR4RXr.png" alt="" />
                    <p className='my-info'>https://github.com/kennyyseo</p>
                </div>
                <div className='linkedin'>
                    <img id='li-icon' src="https://i.imgur.com/1RmmfiN.png" alt="" />
                    <p className='my-info'>https://www.linkedin.com/in/kennyseo/</p>
                </div>
            </div>
        </div>
    )
}

export default Contactpage;