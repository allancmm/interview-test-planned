import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, HeaderTitle } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <HeaderTitle>Planned test</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
