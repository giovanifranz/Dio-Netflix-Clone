import { Key, useEffect, useState } from 'react'
import type { MovieRow, Movie } from '@/utils/http'
import { getHomeList, getMovieInfo } from '@/utils/http'
import {
  MovieRowComponent,
  FeaturedMovie,
  Header,
  Footer,
  Loading
} from '@/components'
import { Container } from '@/styles'

function App() {
  const [movieList, setMovieList] = useState<MovieRow[]>()
  const [featuredData, setFeaturedData] = useState<Movie>()

  useEffect(() => {
    ;(async () => {
      const data = await getHomeList()
      setMovieList(data)

      const originals = data.filter((item) => item.slug === 'originals')
      const random = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      )
      const chosen = originals[0].items.results[random]
      const chosenInfo = await getMovieInfo({ id: chosen.id, type: 'tv' })
      setFeaturedData(chosenInfo)
    })()
  }, [])

  return (
    <>
      <Header />
      {featuredData && <FeaturedMovie movie={featuredData} />}
      {movieList !== undefined && (
        <>
          <Container>
            {movieList.map((list: MovieRow, key: Key) => {
              return <MovieRowComponent key={key} list={list} />
            })}
          </Container>
          {movieList.length <= 0 && <Loading />}
        </>
      )}
      <Footer />
    </>
  )
}

export default App
