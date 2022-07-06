import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;
    ${props => props.primary && css`
    background-color: palevioletred;
    color: white;
    `}
`; //템플릿 스트링 사이에 css를 넣는 방식이다.

export default StyledButton;