export interface Movie {
  id: number
  number_of_seasons: number
  number_of_episodes: number
  original_name: string
  vote_average: number
  backdrop_path: string
  title: string
  poster_path: string
  overview: string
  first_air_date: string
  genres: { id: number; name: string }[]
}

export interface MovieList {
  page: number
  results: Movie[]
}

export interface MovieRow {
  slug: string
  title: string
  items: MovieList
}

export interface GetMovieInfo {
  id: number
  type: 'movie' | 'tv'
}
