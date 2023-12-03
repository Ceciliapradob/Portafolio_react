import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>

            <header className='header'>
                <div className='logo'>Logo</div>

                <nav className='navigation'>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Tecnologías</a></li>
                        <li><a href="#">Certificados</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export { Header }