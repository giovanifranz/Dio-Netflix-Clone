import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --black: #111;
    --green:#46d369;
    --gray:  #999;
    --gray-darker: #333;
}
* {
  box-sizing: border-box;
}

body {
  background-color: var(--black);
  color: var(--white);
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

`

export const Container = styled.section`
  margin-top: -150px;
`
