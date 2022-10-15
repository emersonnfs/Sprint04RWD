import React from 'react'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import {DivApp}from './style/styled'
import MainRoutes from './routes/MainRoutes'

export default function App() {
  return (
    <DivApp>
        <Menu />
        <MainRoutes/>
        <Rodape />
    </DivApp>
    
  )
}