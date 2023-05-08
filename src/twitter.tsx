import './twitter.css'
import twitter from './assets/twitter.jpg'
import organo from './assets/organo.jpg'
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'
export function Twitter (){
    return(
        <>
            <div id='projects-start' className='apresentacao'>
                <h1> Alguns dos meus projetos!</h1>
            </div>

            <div className='projects'>
                <div className='project-img'>
                    <img id='twitter' src={twitter}/>
                </div>
                
                <div className='text'>
                    <h1>Twitter</h1>
                    <h1>Linguagem: React Type</h1>
                    <p>Twitter foi meu primeiro projeto em TypeScript com React, um projeto responsivo e funcional</p>

                    <nav className='repositorios'>
                        <a href='https://github.com/GabrielBarbosa2003/Twitter' target="_blank"> <GithubLogo size={30} /></a>
                        <a href='https://twitter-eight-woad.vercel.app/' target="_blank"> <ArrowSquareOut size={30} /> </a>
                    </nav>
                </div>

            </div>
          
        </>
       

    )
}