import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'
import styles from './modelo2.module.css'


export default function Modelo2({id, imagem, titulo, linguagem, texto, git, vercel}:any) {
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
