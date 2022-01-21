import { Container, Logo, Icon } from './styles'
import logo from '@/assets/logo.png'
import icon from '@/assets/icon.png'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

export function Header() {
  const [blackHeader, setBlackHeader] = useState('transparent')

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader('#141414')
      } else {
        setBlackHeader('transparent')
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  const theme = {
    bg: blackHeader
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Logo>
          <a href="/">
            <img src={logo} alt="Netflix" />
          </a>
        </Logo>
        <Icon>
          <a href="/">
            <img src={icon} alt="Usuário" />
          </a>
        </Icon>
      </Container>
    </ThemeProvider>
  )
}
