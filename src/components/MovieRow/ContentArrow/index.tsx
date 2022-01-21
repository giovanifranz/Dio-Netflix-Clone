import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Content } from './styles'

interface ContentArrowProps {
  direction: 'left' | 'right'
  children: ReactNode
  onClick: () => void
}

export default function ContentArrow({
  direction,
  children,
  onClick
}: ContentArrowProps) {
  const directionMap = {
    left: { left: '0', right: 'auto' },
    right: { left: 'auto', right: '0' }
  }

  const theme = {
    left: directionMap[direction].left,
    right: directionMap[direction].right
  }

  return (
    <ThemeProvider theme={theme}>
      <Content onClick={onClick}>{children}</Content>
    </ThemeProvider>
  )
}
