import styled from "styled-components";


export const Button = styled.button`
    width: 342px;
    cursor: pointer;
    height: 68px;
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    font-size: 20px; 
    line-height: 2px;
    color: #fff;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:50px;
    
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`

// export const Button = styled.button`
//     background: ;
//     margin-top: 50px;


// `