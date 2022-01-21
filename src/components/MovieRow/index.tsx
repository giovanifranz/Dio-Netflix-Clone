import { Key, useState } from 'react'
import type { MovieRow } from '@/utils/http'
import { MovieRowContainer, ListArea, List, Item } from './styles'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import ContentArrow from './ContentArrow'
import { ThemeProvider } from 'styled-components'

interface MovieRowProps {
  list: MovieRow
}

export function MovieRowComponent({ list }: MovieRowProps) {
  const { items, title } = list
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + 150
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listWidth = items.results.length * 150
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60
    }
    setScrollX(x)
  }

  const theme = {
    w: `${items.results.length * 150}px`,
    ml: `${scrollX}px`
  }

  return (
    <MovieRowContainer>
      <h2>{title}</h2>
      <ContentArrow direction="left" onClick={handleLeftArrow}>
        <MdNavigateBefore size="80px" />
      </ContentArrow>
      <ContentArrow direction="right" onClick={handleRightArrow}>
        <MdNavigateNext size="80px" />
      </ContentArrow>
      <ListArea>
        <ThemeProvider theme={theme}>
          <List>
            {items.results.map((item, key: Key) => {
              return (
                <Item key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.title}
                  />
                </Item>
              )
            })}
          </List>
        </ThemeProvider>
      </ListArea>
    </MovieRowContainer>
  )
}
