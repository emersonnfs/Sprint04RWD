import styled from 'styled-components'

export const DivCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    margin: 5px;
    padding: 5px;
`

export const DivImgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    height: 90%;
`
export const Img = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin: 10px;
`
export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const DivCabecalho = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1em;
`
export const Button = styled.button`
    background-color: #727DBA;
    border-radius: 5px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    cursor : pointer;
`
export const ButtonBack = styled.button`
    background-color: #727DBA;
    border-radius: 5px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
    cursor : pointer;
`
export const DivApp = styled.div`
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color : #F4F4F4;
`

export const DivMenu = styled.div`
    background-color : #727DBA;
    color : white;
    height: 80px;
    width : 100%;
    font-size: 1rem;
    display : flex;
    align-items : center;
    font-family : 'Nunito Sans', sans-serif;
`
export const DivRodape = styled.div`
    background-color : #727DBA;
    color : white;
    height : 50px;
    font-family : 'Nunito Sans', sans-serif;
    display : flex;
    align-items : center;
    justify-content : center;
`

export const LogoMenu = styled.button`
    margin-left : 4rem;
    background-color : #727DBA;
    border : none;
    color : white;
    font-size : 1.5rem;
    font-family : 'Nunito Sans', sans-serif;
    cursor : pointer;
`

export const DivHome = styled.div`

    background-color : #017694;
    margin-top : 8rem;
    margin-bottom : 13rem;
    display : flex;
    justify-content : center;
    color : white;
    height: fit-content;

`

export const HomeImage = styled.img`
    width : 100%;
    height : 100%;
    margin-left: 2rem;
`

export const HomeColunaDireita = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align : center;
    margin : 5rem 2rem;
`

export const HomeH1 = styled.h1`
    font-size : 35px;
`

export const HomeP = styled.p`
    font-size : 22px;
    font-weight : 200;
`

export const BotaoCadastro = styled.input`
    border-radius : 10px;
    background-color : #62617E;
    color : white;
    border : none;
    text-decoration : none;
    width : 10rem;
    height : 2.5rem;
    margin-right : 2rem;
    margin-top : 3rem;
    cursor : pointer;
    &:hover {
        background-color : #595870;
    }
`

export const BotaoLogin = styled.input`
    border-radius : 10px;
    background-color : #4A4964;
    color : white;
    border : none;
    text-decoration : none;
    width : 10rem;
    height : 2.5rem;
    margin-top : 3rem;
    cursor : pointer;
    &:hover {
        background-color : #3F3E56;
    }
`
export const Header = styled.header`
    background-color: purple;
    height: 80px;
 `
export const Pheader = styled.p`
    font-size: 30px;
`
export const  DivHeader = styled.div`
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const  DivFormB = styled.div`
    background-color: #d3d3d3;
    height: 82vh;
    display: flex;
    justify-content: center;
`

export const DivFormCenter = styled.div `
    background-color : white;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    height: 450px;
    display: flex;
`

export const DivFormularios = styled.div`
    width: 60%;
    height: fit-content;
    padding: 20px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Label = styled.label`
        text-align : center;
        margin-bottom: 20px;
        margin-top: 40px;
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    background-color: #d3d3d3;  
`

export const Footer = styled.footer`
    background-color: purple;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
`
export const DivCadaButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`