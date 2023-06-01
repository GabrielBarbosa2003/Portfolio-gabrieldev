import './menu.css'
//const { useRef, useState, useEffect, createRef } = React

export function Menu() {
    return (

        <div className='container' id='menu-area'>
            <div className='nome' id='nome'>
                <h1>Gabriel.Dev</h1>
            </div>
            <div className='menu' id='menu'>
                <nav id='start'>

                    <a href='#start'>Home</a>
                    <a href='#ancora-about'>Sobre</a>
                    <a href='#projects-start'>Projetos</a>
                    <a href='#ancora-exp'>Experiências</a>
                    <a href='#ancora-contato'>Contato</a>
                </nav>
            </div>

        </div>


    )
}