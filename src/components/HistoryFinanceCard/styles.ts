import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Card = styled.li`
  position: relative;
  background-color: ${props => props.theme.colors.tertiary};
  padding: 16px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  list-style: none;
  cursor: pointer;
  transition: transform .1s;

  &:hover {
    opacity: .7;
    transform: scale(1.01);
  }
`;

export const Title = styled.div`

  > span, > small {
    display: block;
  }
`

export const Tag = styled.span<ITagProps>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  width: 8px;
  background-color: ${props => props.color};
`;