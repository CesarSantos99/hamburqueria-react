import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
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


export const User = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    width: 342px;
    height: 100px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 20px;
    padding-right: 10px;
    
    p{
        width: 320px;
        color: #FFFFFF;
        font-size: 20px;
        padding-left: 20px;
        padding-top: 10px;
    }

    .cliente{
        width: 340px;
        font-weight: 700;
        font-size: 21px;
        line-height: 21px;
    }

    button {
        background:none;
        border: none;
        cursor: pointer;
    }
`

