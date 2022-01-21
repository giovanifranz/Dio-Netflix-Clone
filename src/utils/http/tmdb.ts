import axios from 'axios'
import type { MovieRow, MovieList, Movie, GetMovieInfo } from './interfaces'

const httpVideo = axios.create({
  baseURL: import.meta.env.VITE_API_BASE as string
})

const API_KEY = import.meta.env.VITE_API_KEY as string

const basicFetch = async (endpoint: string) => {
  return await httpVideo.get<MovieList>(endpoint).then((res) => res.data)
}

export async function getHomeList(): Promise<MovieRow[]> {
  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      )
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      )
    }
  ]
}

export async function getMovieInfo({ id, type }: GetMovieInfo) {
  return await httpVideo
    .get<Movie>(`/${type}/${id}?language=pt-BR&api_key=${API_KEY}`)
    .then((res) => res.data)
}
