import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/fonts/FiraCode-Regular.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fira Code';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors['base-border']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors['brand-blue']};
      border-radius: 999px;
    }
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: ${(props) => props.theme.textSizes['text-text-m']};
    font-weight: 400;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
