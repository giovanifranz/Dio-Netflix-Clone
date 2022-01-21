import styled from 'styled-components'

export const FeaturedMovieContainer = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.theme.image});
`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const Info = styled.article`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  p {
    display: inline-block;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Points = styled.p`
  color: var(--green);
`

export const Description = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: var(--gray);
  max-width: 40%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`

export const Genres = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: var(--gray);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
