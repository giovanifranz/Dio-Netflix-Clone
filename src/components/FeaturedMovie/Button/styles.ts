import styled from 'styled-components'

export const Link = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  opacity: 1;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
