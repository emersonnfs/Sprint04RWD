import React from 'react'
import Cadastro from './components/Cadastro'
import {H1App,FooterApp}from './style/styled'

export default function App() {
  return (
    <div>
      <H1App>SolveUs</H1App>
      <Cadastro/>
      <FooterApp>Direitos reservados para SolveUs. 2022</FooterApp>
    </div>
  )
}