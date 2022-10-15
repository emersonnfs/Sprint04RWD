import React from 'react';
import { DivFormB , DivFormCenter,DivFormularios, Button, Div, Label, Input} from '../style/styled';
import VagasFt from '../img/vagas.png'
export default function FormVagas() {
  return (
        <DivFormB>
            <DivFormCenter>
                <DivFormularios >

                    <div>
                        <form method="post">
                            <Div>
                                <Label> Insira o nome da vaga: </Label>
                                <Input type="text" name="nmVaga" id="nmVaga" />
                            </Div>
                            <Div>
                                <Label> Insira a descrição: </Label>
                                <Input type="text" name="dsVaga" id="dsVaga" />
                            </Div>
                            <Div>
                                <Label> Insira o Salário:  </Label>
                                <Input type="number" name="vlVaga" id="vlVaga" />
                            </Div>
                            <Div>
                                <Button type="submit"> Cadastrar!</Button>
                            </Div>
                        </form>
                    </div>
                </DivFormularios>
                <div style={{width: '60%'}}>
                    <img src={VagasFt} alt="foto de cadastro" style={{width: '100%', height:'100%'}}/>

                </div>
            </DivFormCenter>
        </DivFormB>
        
    );
}
