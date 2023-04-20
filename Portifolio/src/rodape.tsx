import { ReadCvLogo } from '@phosphor-icons/react'
import './rodape.css'
import cv from './assets/currículo.pdf'
import { useState } from 'react'

const urlCvdowload='https://drive.google.com/u/0/uc?id=1WEqBhzI-Tq79oZThZrYT62Ny_lDEkFpa&export=download'

export function Rodape() {
    const [download, setdowload] = useState('')
    return (
        <>
            <hr />
            <footer className='final'>
                <footer className='dev-text' id='text-dev'>
                    <h1>Desenvolvedor FullStack React e Node js</h1>
                </footer>

                <footer className='cv' id='cv-footer'>
                    <ReadCvLogo size={40} weight="thin" />
                    <h1>Meu Currículo:</h1>
                    <button onClick={() =>{setdowload(urlCvdowload)}}>Baixar cv</button>

                    {download && <iframe src={download} style={{display:'none'}}></iframe>}
                    
                </footer>
            </footer>
        </>


    )
}