import { Container, Git } from './styles'

export function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/giovanifranz"
        target="_blank"
        rel="noreferrer"
      >
        <Git
          src="https://avatars.githubusercontent.com/u/79429654?v=4"
          width="85px;"
        />
      </a>
      <h2>Giovani Franz</h2>
      <p>
        <a
          href="https://linkedin.com/in/giovanifranz"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="linkedin"
          />
        </a>
        <a
          href="mailto:giovanifranz151@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Gmail"
          />
        </a>
        <br />
        <br />
        Direitos de imagem{' '}
        <a href="https://www.netflix.com/" target="_blank" rel="noreferrer">
          Netflix
        </a>
        <br />
        Dados obtidos de{' '}
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDB
        </a>
      </p>
    </Container>
  )
}
