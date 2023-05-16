import './sobre.css'
import code from './assets/code.jpg'
export function Sobre() {
    return (
        <>
            <div id='ancora-about'></div>


            <div id='about' className='sobre'>
                <div className='foto'>
                    <img src={code} alt='code image' />
                </div>

                <div className='texto'>
                    <h1>ABOUT ME</h1>
                    <h2>Codando desde 2018...</h2>
                    <p>Comecei com a programação em 2018, onde aprendi muito no ensino médio, e desde então venho praticando e estudando as mais novas bibliotecas e framework do mercado.</p>
                    <p>Possuo conhecimento em diversas linguagens, mas possuo grande expertisse em JavaScript, TypeScript, HTML, CSS e MySql</p>
                    <p>Contruo sites e interfaces dinamicas com a biblioteca mais crescente do mercado, React, e o back-end com Node.js, criando um script limpo e com as mais boas praticas da programação. </p>
                </div>
            </div>
        </>
    )
}