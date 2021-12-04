import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.aside`
  grid-area: AS;
  padding-left: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.grey};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
  margin-top: 20px;
`;

export const MenuItemLink = styled(Link)`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  transition: opacity .3s;
  display: flex;
  align-items: center;
  margin: 0 0 16px;

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }

  &:hover {
    opacity: .7;
  }
`;