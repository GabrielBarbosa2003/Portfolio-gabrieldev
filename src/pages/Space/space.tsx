import './space.css'
import space from '../../assets/space.png'

import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'

export function Space() {
    return(
        <>

        <div className='projects-space'>
            <div className='imagem-space'>
                <img id='space' src={space}/>
            </div>
            
            <div className='text-space'>
                <h1>Space</h1>
                <h1>Linguagem: React JS</h1>
                <p>Space é uma galeria de imagens! Desfrute das imagens do universo com um toque da magia da programação.</p>

                <nav className='repositorios-space'>
                    <a href='https://github.com/GabrielBarbosa2003/space' target="_blank"> <GithubLogo size={30} /></a>
                    <a href='https://space-six-wine.vercel.app/' target="_blank"> <ArrowSquareOut size={30} /> </a>
                </nav>
            </div>

        </div>
      
    </>
    )
}
