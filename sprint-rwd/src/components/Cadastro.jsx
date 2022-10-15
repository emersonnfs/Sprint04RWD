import React from "react";
import estagiario from "../img/estagiario.png"
import empresa from "../img/empresa.png"
import { DivCadastro,DivImgs,Img,DivImg,DivCinza,DivCabecalho,Button,ButtonBack} from "../style/styled";
import { BsArrowLeft as BACK } from 'react-icons/bs'

export default function Cadastro() {
    return (
        
        <DivCinza>
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
                        <a href="./">
                            <Button type="submit">Estagiário</Button>
                        </a>
                    </DivImg>
                    <DivImg>
                        <Img src={empresa} alt="cadastro da empresa" />
                        <a href="./">
                            <Button type="submit">Empresa</Button>
                        </a>
                    </DivImg>     
                </DivImgs>         
            </DivCadastro>
        </DivCinza>
    );
}