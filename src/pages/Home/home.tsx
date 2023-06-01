import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import './home.css'
import jslogo from '../../assets/javascript.png'
import tylogo from '../../assets/typescript.png'
import html from '../../assets/html.svg'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mysql from '../../assets/mysql.svg'

// <span> <SiJavascript size={20}/> </span>

export function Home() {
    return (
        <div className='home'>
            <div className='textc'>
                <div className='home-text'>
                    <h1>Desenvolvedor FullStack React e NodeJs</h1>
                    <p> Olá, me chamo Gabriel Barbosa, e sou desenvolvedor Fullstack.</p>
                    <p> Seja bem vindo ao meu portifólio!</p>
                </div>
                <div className='sociais'>
                    <nav>
                        <a href='https://github.com/GabrielBarbosa2003' target="_blank"> <GithubLogo size={32} /></a>

                        <a href='https://www.linkedin.com/in/gabriel-barbosa-372ba71b1/' target="_blank"> <LinkedinLogo size={32} /></a>
                    </nav>

                </div>
                <div className='skills'>
                    <nav className='tech'>
                        <span>Tech Stack |</span>
                    </nav>
                    <nav className='icons'>
                        <span><img src={jslogo} /></span>
                        <span><img src={tylogo} /></span>
                        <span><img src={html} /></span>
                        <span><img src={css} /></span>
                        <span><img src={react} /></span>
                        <span><img src={node} /></span>
                        <span><img src={mysql} /></span>
                    </nav>


                </div>
            </div>

            <div className='fotoc'>
                <div className='image'>
                    <img src='https://github.com/GabrielBarbosa2003.png' />
                </div>
            </div>

        </div>
    )

}