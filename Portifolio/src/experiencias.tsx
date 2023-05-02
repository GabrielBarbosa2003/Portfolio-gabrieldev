import './experiencias.css'

import code from './assets/code.jpg'
export function Expe() {
    return (
        <>
            <div id='ancora-about'></div>


            <div id='about' className='expe'>
                <div className='pic'>
                    <img src={code} alt='code image' />
                </div>

                <div className='experiencia'>
                    <h1>Minhas Experiências</h1>
                    <h2>Um pouco das minhas experiências como Dev:</h2>
                    <p>Atualmente sou desenvolvedor na Funcamp por mais de um ano, onde atuo em um projeto com Netsuite, um sistema ERP da oracle programado com SuiteScripts juntamente com JavaScript.
                        participo de reuniões diariamente, onde me passam adversidades que precisam ser resolvidas, e entao busco solucionar da melhor forma possivel.
                    </p>
                    <p>Sou o Dev com mais tempo de experiência dentro do meu time, o que me proporcionou uma convivência com novos Devs, entao pude fazer parte de seus aprendizados, assim os treinando e aprendendo ao mesmo tempo!</p>
                    <p>Além desse projeto, já participei em um projeto educacional chamado "Edukas", onde pude fazer o começo de sua API com JavaScript, acessando um banco de questões da plataforma, e fazendo algumas requisições.</p>
                    <p>Além das experiências do técnico, faculdade e trabalho, venho me aprimorando cada vez mais na biblioteca React juntamente com NodeJs, fazendo projetos e cursos, que podem ser visualizados em meu GitHub, e um alguns nesse portifólio.</p>
                </div>
            </div>
        </>
    )
}