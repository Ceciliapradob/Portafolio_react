import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import './Technologies.css'

const Technologies = () => {
    return(
        <> 
        <section className="technologies">
            <h2>Tecnologías</h2>
            <div className="icons">
                <FaHtml5 className='html'/>
                <FaCss3Alt className='css' />
                <FaJs  className='js'/>
                <FaReact className='react'/>
                <FaNodeJs className='node'/>
                <FaDatabase className='mongodb'/>
            </div>
        </section>
        
        </>
    )
}

export { Technologies }