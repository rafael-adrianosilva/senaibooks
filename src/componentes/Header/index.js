import Logo from '../index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import styled from 'styled-components';
import IconesHeader from '../IconesHeader/index.js';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}

export default Header;