import React from 'react';
import { BotaoCadastro, BotaoLogin, DivHome, HomeColunaDireita, HomeH1, HomeImage, HomeP,DivButtons,DivCadaButton} from '../style/styled';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <DivHome>
        <div id="ladoEsquerdo">
        <HomeImage src="https://media.discordapp.net/attachments/699026901343404152/1029823124843274300/unknown.png?width=1123&height=676" alt="" srcset="" />
        </div>

        <HomeColunaDireita id="ladoDireito">
            <HomeH1>QUER DAR O PRIMEIRO PASSO?<br></br> A GENTE TE AJUDA!</HomeH1>
            <HomeP>A SolveUS tem como foco tornar a busca pelo primeiro emprego
                algo simples e leve (tanto para empresa, quanto pro estagiário)
                Basta se cadastrar e aproveitar!
            </HomeP>
            <DivButtons>
                <DivCadaButton>
                    <nav>
                        <Link to="/cadastro"><BotaoCadastro type="button" value="Cadastro" /></Link>
                    </nav>
                </DivCadaButton>
                <DivCadaButton>
                    <BotaoLogin type="button" value="Login" />
                </DivCadaButton>
            </DivButtons>

            
        </HomeColunaDireita>
        
    </DivHome>
  )
}

export default Home;