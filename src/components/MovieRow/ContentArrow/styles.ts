import styled from 'styled-components'

export const Content = styled.div`
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
  position: absolute;
  width: 40px;
  height: 225px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
`
