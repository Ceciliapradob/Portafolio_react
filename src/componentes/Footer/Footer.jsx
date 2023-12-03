import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa' 
import './Footer.css'

const Footer = () => {
    return(
        <>
        <footer className='footer'>
            <div className="footer-content">
                <p>(+54) 1126587076</p>
                <a href="url_de_github" target='_blank' className='github'><FaGithub/></a>
                <a href="url" target='_blank' className='linkedin'><FaLinkedin/></a>
            </div>
            <hr />
        </footer>
        
         </>
    )
}

export { Footer }