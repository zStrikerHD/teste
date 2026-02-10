import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: '#FFF8F2',
  rosaEscuro: '#ffe6d6',
  rosaMedio: '#FFEBD9',
  branco: '#FFFFFF',
  vermelho: '#E00905'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaEscuro};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  }

  @media (max-width: 720px) {
    .container {
      padding: 0 16px;
    }
  }
`
