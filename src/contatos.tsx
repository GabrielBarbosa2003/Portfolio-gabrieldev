import { DiscordLogo, Envelope } from '@phosphor-icons/react'
import './contatos.css'

export function Contatos() {
    return (
        <footer className='contato-rodape'>
            <footer className='descricao' id='resumo'>
                <h1>Contatos</h1>
                <p>Estou em busca de Freelances ou vagas para Desenvolvedor React e/ou NodeJs</p>
                <p>Se ficou interessado, entre em contato comigo através do meu email ou Discord!</p>
            </footer>

            <footer className='contatos' id='contato'>
                <nav className='logos'>
                    <div className='email'>
                        <Envelope size={32} weight="thin" />
                        <span>gabrieldecarvalhu@gmail.com</span>
                    </div>
                    <div className='discord'>
                        <DiscordLogo size={32} weight="thin" />
                        <span>rilexy#3905</span>
                    </div>

                </nav>
            </footer>
        </footer>

    )
}