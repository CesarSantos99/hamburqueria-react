import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0A0A10;
`
export const ImagemPrincipal = styled.img`
    width: 342px;
    height: 354px;
    margin-top: 11px;
`

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom:76px;


`
export const ContainerInput = styled.div`
`

export const SubTitulo = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 22px;

`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 42px;
    color: #FFFFFF;
    font-size: 20px;
    padding: 10px;
    flex: none;
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    font-size: 20px;
    line-height: 2px;
    color: #fff;
    border:none;

    
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`
