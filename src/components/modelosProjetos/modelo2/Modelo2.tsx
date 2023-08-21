import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'
import styles from './modelo2.module.css'
import { IModelo } from '../../../compartilhado/IModelo'


export default function Modelo2({imagem, titulo, linguagem, texto, git, vercel}:IModelo) {
    return (
        <div className={styles.modelo}>
        <div className={styles.text}>
            <h1>{titulo}</h1>
            <h1>{linguagem}</h1>
            <p>{texto}</p>

            <nav className={styles.repositorios}>
                <a href={git} target="_blank"> <GithubLogo size={30} /></a>
                <a href={vercel} target="_blank"> <ArrowSquareOut size={30} /> </a>
            </nav>
        </div>

        <div className={styles.modeloImg}>
            <img src={imagem} />
        </div>
    </div>
    )
}
