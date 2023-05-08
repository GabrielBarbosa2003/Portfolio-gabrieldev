import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'
import './organo.css'
import organo from './assets/organo.jpg'

export function Organo() {
    return (
        <div className='organo'>
            <div className='text'>
                <h1>Organo</h1>
                <h1>Linguagem: React JS</h1>
                <p>Organo é um formulario de criação de times de programação, feito com JavaScript.</p>

                <nav className='repositorios'>
                    <a href='https://github.com/GabrielBarbosa2003/Organo-React' target="_blank"> <GithubLogo size={30} /></a>
                    <a href='' target="_blank"> <ArrowSquareOut size={30} /> </a>
                </nav>
            </div>

            <div className='organo-img'>
                <img id='organo' src={organo} />
            </div>
        </div>
    )
}