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
                    <a href='#ancora-about'>About</a>
                    <a href='#projects-start'>Projects</a>
                    <a href=''>Contact</a>
                </nav>
            </div>

        </div>


    )
}