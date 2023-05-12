import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Menu } from './menu'
import { Home } from './home'
import { Sobre } from './sobre'
import { Twitter } from './twitter'
import { Organo } from './organo'
import { Contatos } from './contatos'
import { Rodape } from './rodape'
import { Expe } from './experiencias'
import { Space } from './space'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu/>
    <Home/>
    <Sobre/>
    <Twitter/>
    <Organo/>
    <Space/>
    <Expe/>
    <Contatos/>
    <Rodape/>
    
  </React.StrictMode>,
)
