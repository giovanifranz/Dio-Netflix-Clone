import styled from 'styled-components'

export const MovieRowContainer = styled.article`
  margin-bottom: 30px;

  h2 {
    margin-left: 30px;
  }

  &:hover div {
    opacity: 1;
  }

  @media (max-width: 768px) {
    div {
      opacity: 1;
    }
  }
`

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`

export const List = styled.div`
  width: ${(props) => props.theme.w};
  margin-left: ${(props) => props.theme.ml};
  transition: all ease 0.7s;
`

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`
