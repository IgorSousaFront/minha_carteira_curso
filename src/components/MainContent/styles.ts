import styled from 'styled-components'

export const Container = styled.main`
  grid-area: MC;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 25px;
`;