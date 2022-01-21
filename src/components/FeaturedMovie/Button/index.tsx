import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Link } from './styles'

interface ButtonProps {
  href: string
  children: ReactNode
  type: 'watch' | 'list'
}

export default function Button({ href, children, type }: ButtonProps) {
  const MapTypeToTheme = {
    watch: { color: 'var(--black)', bg: 'var(--white)' },
    list: { color: 'var(--white)', bg: 'var(--gray-darker)' }
  }

  const theme = {
    color: MapTypeToTheme[type].color,
    bg: MapTypeToTheme[type].bg
  }

  return (
    <ThemeProvider theme={theme}>
      <Link href={href}>{children}</Link>
    </ThemeProvider>
  )
}
