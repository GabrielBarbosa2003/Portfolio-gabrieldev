import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Menu } from './pages/Menu/menu'
import { Home } from './pages/Home/home'
import { Sobre } from './pages/Sobre/sobre'
import { Contatos } from './pages/Contatos/contatos'
import { Rodape } from './pages/Rodape/rodape'
import { Expe } from './pages/Experiencias/experiencias'
import { Projetos } from './pages/Projetos/projetos'
import { Certificados } from './pages/Certificados/Certificados'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu/>
    <Home/>
    <Certificados/>
    <Sobre/>
    <Projetos/>
    <Expe/>
    <Contatos/>
    <Rodape/>
    
  </React.StrictMode>,
)
