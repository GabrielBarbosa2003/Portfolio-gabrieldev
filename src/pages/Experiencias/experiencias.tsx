import './experiencias.css'

import code from '../../assets/dev4.jpg'
export function Expe() {
    return (
        <>
            <div id='ancora-exp'></div>
            <div id='about' className='expe'>
                <div className='pic'>
                    <img src={code} alt='code image' />
                </div>

                <div className='experiencia'>
                    <h1>Minhas Experiências</h1>
                    <h2>Um pouco das minhas experiências como Dev:</h2>
                    <p>Atualmente sou desenvolvedor na Funcamp e já participei de diversos projetos com diversas linguagens, e aqui estão algumas delas!</p>
                    <h3>Netsuite - Tempo de atuação: 1 ano</h3>
                    <p>Netsuite é um sistema ERP da oracle, onde programamos com JavaScript e SuiteScripts. Dentro desse projeto, fui responsavel por participar de diversas reuniões, onde era me passado
                        o problema da empresa enfrentado, e então através das informações e especificação, buscava a solução através dos códigos.
                    </p>
                    <h3>Edukas - Tempo de atuação: 3 mesês</h3>
                    <p>O projeto Edukas é um sistema feito para escolas de Rio Preto, um sistema que visa a educação através da plataforma com jogos e videos.</p>
                    <p>Dentro desse projeto, desenvolvi uma API com JavaScript, onde acessava um banco de questões da plataforma, e então poderia fazer tarefas simples, como um CRUD</p>
                    <h3>Atualmente</h3>
                    <p>Hoje em dia estou em um projeto chamado Dolibar, um projeto implementado em Rio preto que organiza e gerencia diversos dados, agilizando diversos processos que antigamente eram feitos manualmente</p>
                    <p>Além de continuar meus estudos e projetos na programação, com React e NodeJS.</p>
                    
                </div>
            </div>
        </>
    )
}