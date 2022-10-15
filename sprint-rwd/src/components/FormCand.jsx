import React from 'react';
import { DivFormCenter,DivFormularios, Button, Div, Label, Input} from '../style/styled';
import CandidatoFt from '../img/estagiario.png'
export default function FormCand() {
  return (
        
            <DivFormCenter>
                <DivFormularios >

                    <div>
                        <form method="post">
                            <Div>
                                <Label> Insira o seu nome: </Label>
                                <Input type="text" name="nmCand" id="nmCand"  style={{}}/>
                            </Div>
                            <Div>
                                <Label> Seu E-mail: </Label>
                                <Input type="email" name="emCand" id="emCand" />
                            </Div>
                            <Div>
                                <Label> Sua Senha:  </Label>
                                <Input type="password" name="passCand" id="passCand" />
                            </Div>
                            <Div>
                                <br /><Button type="submit"> Cadastrar!</Button>
                            </Div>
                        </form>
                    </div>
                </DivFormularios>
                <div style={{width: '60%'}}>
                    <img src={CandidatoFt} alt="foto de cadastro" style={{width: '100%', height:'100%'}}/>

                </div>
            </DivFormCenter>
        
        
    );
}