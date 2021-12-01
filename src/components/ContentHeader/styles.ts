import styled from "styled-components";

interface ITitleProps {
  lineColor: string;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const Title = styled.div<ITitleProps>`

  > h1 {
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      width: 40px;
      height: 8px;
      display: block;
      margin-top: 3px;
      background-color: ${props => props.lineColor};
    }
  }
`
export const Controllers = styled.div`
  display: flex;
  align-items: flex-start;
`