import React from 'react';

import LogoAsset from '../../assets/logo.svg'

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title
} from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={LogoAsset} alt="Logo Minha Carteira" />
        <Title>Minha carteira</Title>
      </Header>
      
      <MenuContainer>
        <MenuItemLink to="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink to="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink to="/list/exit-balance">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>
        <MenuItemLink to="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;