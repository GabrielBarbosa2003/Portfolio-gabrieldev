import { ReadCvLogo } from '@phosphor-icons/react'
import './rodape.css'
import cv from './assets/CV.GabrielBarbosa.pdf'
import { motion } from "framer-motion";

export function Rodape() {
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
                    <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <a href={cv} download={'CV.Gabriel_Barbosa.pdf'}><button>Baixar cv</button></a>
                    </motion.div>
                    

                </footer>
            </footer>
        </>


    )
}