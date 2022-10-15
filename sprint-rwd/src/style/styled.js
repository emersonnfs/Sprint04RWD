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
export const H1App = styled.h1`
    font-size: 2.5em;
    background-color: #ADD8E6;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin: 0;
`
export const FooterApp = styled.footer`
    align-items: center;
    text-align: center;
    background-color: #ADD8E6;
`
export const DivCinza = styled.div`
    background-color: #808080;
    width: 100%;
    height: 670px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    background-color: #ADD8E6;
    border-radius: 5px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`
export const ButtonBack = styled.button`
    background-color: #ADD8E6;
    border-radius: 5px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
`