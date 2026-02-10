import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0 4px;

  img {
    max-width: 100%;
    width: 220px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 720px) {
    padding: 12px 0 0;

    img {
      width: 180px;
    }
  }

  @media (max-width: 420px) {
    img {
      width: 150px;
    }
  }
`
