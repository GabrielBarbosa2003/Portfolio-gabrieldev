import certificadosImagem from '../../json/certificados.json'
import './Certificados.css'

export function Certificados() {
    return (
        <div className='tamanho'>
            <ul className="cards">
                {certificadosImagem.map((imagem) => {
                    return (
                        <li key={imagem.id} className="card">
                            <img
                                className="imagem_certificados"
                                src={imagem.imagem}
                                alt={imagem.titulo}
                            />

                        </li>
                    )
                })}
            </ul>

        </div>

    )
}
