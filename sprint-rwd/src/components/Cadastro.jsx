import React from "react";
import estagiario from "../img/estagiario1.png"
import empresa from "../img/empresa1.png"
import { DivCadastro,DivImgs,Img,DivImg,DivCabecalho,Button,ButtonBack} from "../style/styled";
import { BsArrowLeft as BACK } from 'react-icons/bs'
import { Link } from "react-router-dom"

export default function Cadastro() {
    return (
        
        <div>
            <DivCadastro>
                <DivCabecalho>
                    <div>
                        <a href="./">
                            <ButtonBack><BACK/></ButtonBack>
                        </a>
                    </div>            
                    <div>
                        <h1>Com qual perfil você se encaixa</h1>
                    </div>
                </DivCabecalho>
                <DivImgs>
                    <DivImg>
                        <Img src={estagiario} alt="cadastro do estagiario" />
                        <nav>
                            <Link to="/formCandidato"><Button type="submit" value="Estagiário">Estagiário</Button></Link>
                        </nav> 
                    </DivImg>
                    <DivImg>
                        <Img src={empresa} alt="cadastro da empresa" />
                        <nav>
                            <Link to="/formEmpresa"><Button type="submit" value="Empresa">Empresa</Button></Link>
                        </nav>
                    </DivImg>     
                </DivImgs>         
            </DivCadastro>
        </div>
    );
}