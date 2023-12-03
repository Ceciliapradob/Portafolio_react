import React from 'react';
import Ceci from '../assets/ceci-foto.png'
import './About.css'

const About = () => {
    return (
        <>
            <section className='about'>
                <div className="about-content">
                    <div className="about-details">
                        <div className="text">
                            <h2 className='about-title'>Sobre mi</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cupiditate nesciunt culpa! Doloremque cum, perspiciatis eum explicabo quibusdam repellat maiores rerum sit corporis, fuga nobis? Magni earum vero minima! Eum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus repellendus exercitationem nesciunt nisi quo accusamus quidem minima, dicta mollitia, sint, culpa soluta amet molestiae aspernatur? Quam nisi suscipit accusamus?
                            </p>
                            <button className='btn yellow-btn'>Saber más</button>
                        </div>
                        <div className="image-container">
                            <img src={Ceci} alt="" />
                        </div>
                    </div>
                </div>
                <hr />
            </section>

        </>
    )
}

export { About }