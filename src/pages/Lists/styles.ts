import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.ul``

export const Filters = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  .tag-filter {
    background: none;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    margin: 0 20px;
    transition: opacity .1s;
    opacity: .4;

    &:hover {
      opacity: .7;
    }

    &::after {
      content: '';
      display : block;
      width: 45px;
      margin: 8px auto 0;
      border-bottom: 10px solid;
    }

    &-recurrent::after {
      border-color: ${props => props.theme.colors.success};
    }
    
    &-eventual::after {
      border-color: ${props => props.theme.colors.warning};
    }
    
    &-all::after {
      border-color: ${props => props.theme.colors.info};
    }

    &.tag-active {
      opacity: 1;
    }
  }
`