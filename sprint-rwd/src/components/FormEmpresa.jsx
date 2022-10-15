import React from 'react';
import { DivFormCenter,DivFormularios, Button, Div, Label, Input} from '../style/styled';
import EmpresaFt from '../img/empresa.png'
export default function FormEmpresa() {
  return (
        
            <DivFormCenter>
                <DivFormularios >

                    <div>
                        <form method="post">
                            <Div>
                                <Label> Insira o nome de sua empresa: </Label>
                                <Input type="text" name="nmEmp" id="nmEmp"  style={{}}/>
                            </Div>
                            <Div>
                                <Label> E-mail corporativo: </Label>
                                <Input type="email" name="emEmp" id="emEmp" />
                            </Div>
                            <Div>
                                <Label> Senha:  </Label>
                                <Input type="password" name="passEmp" id="passEmp" />
                            </Div>
                            <Div>
                                <br /><Button type="submit"> Cadastrar!</Button>
                            </Div>
                        </form>
                    </div>
                </DivFormularios>
                <div style={{width: '60%'}}>
                    <img src={EmpresaFt} alt="foto de cadastro" style={{width: '100%', height:'100%'}}/>

                </div>
            </DivFormCenter>
        
    );
}
