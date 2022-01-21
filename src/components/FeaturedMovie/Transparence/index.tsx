import { ReactNode } from 'react'
import { TransparenceX, TransparenceY } from './styles'

interface TransparenceProps {
  children: ReactNode
}

export default function Transparence({ children }: TransparenceProps) {
  return (
    <TransparenceX>
      <TransparenceY>{children}</TransparenceY>
    </TransparenceX>
  )
}
