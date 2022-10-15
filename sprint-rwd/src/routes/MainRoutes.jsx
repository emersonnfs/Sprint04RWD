import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Cadastro from "../components/Cadastro"
import FormCand from "../components/FormCand"
import FormEmpresa from "../components/FormEmpresa"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/formCandidato" element={<FormCand/>} />
            <Route path="/formEmpresa" element={<FormEmpresa/>} />
        </Routes>
    )
}