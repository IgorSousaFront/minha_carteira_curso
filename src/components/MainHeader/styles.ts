import styled from 'styled-components'

export const Container = styled.header`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.colors.grey}
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.white}
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;