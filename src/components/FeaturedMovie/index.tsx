import { Movie } from '@/utils/http'
import { ThemeProvider } from 'styled-components'
import {
  FeaturedMovieContainer,
  Title,
  Info,
  Points,
  Description,
  Genres
} from './styles'
import Transparence from './Transparence'
import Button from './Button'

interface FeaturedMovieProps {
  movie: Movie
}

export function FeaturedMovie({ movie }: FeaturedMovieProps) {
  const {
    original_name,
    backdrop_path,
    vote_average,
    number_of_seasons,
    overview,
    first_air_date,
    genres,
    id
  } = movie
  const year = new Date(first_air_date).getFullYear()
  const genresList = genres.map((genre) => genre.name).join(', ')

  const theme = {
    image: `https://image.tmdb.org/t/p/original${backdrop_path}`
  }

  return (
    <ThemeProvider theme={theme}>
      <FeaturedMovieContainer>
        <Transparence>
          <Info>
            <Title>{original_name}</Title>
            <Points>{vote_average} Pontos</Points>
            <p>{year}</p>
            <p>
              {number_of_seasons}
              {number_of_seasons !== 1 ? ' Temporadas' : ' Temporada'}
            </p>
          </Info>
          <Description>{overview}</Description>
          <div>
            <Button type="watch" href={`/watch/${id}`}>
              ► Assistir
            </Button>
            <Button type="list" href={`/list/${id}`}>
              + Minha Lista
            </Button>
          </div>

          <Genres>
            <strong>Gêneros:</strong> {genresList}
          </Genres>
        </Transparence>
      </FeaturedMovieContainer>
    </ThemeProvider>
  )
}
