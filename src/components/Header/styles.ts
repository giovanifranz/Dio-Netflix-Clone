import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${(props) => props.theme.bg};
  transition: all ease 0.5s;
`

export const Logo = styled.div`
  height: 25px;
  img {
    height: 100%;
  }
`

export const Icon = styled.div`
  height: 35px;

  img {
    height: 100%;
    border-radius: 3px;
  }
`
