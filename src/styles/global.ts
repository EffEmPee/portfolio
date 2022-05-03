import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem 'Roboto', sans-serif;
  }

  a, strong {
    color: ${props => props.theme.colors.text};
    font: 600 1rem 'Roboto', sans-serif;
    transition: 0.3s ease-in-out;
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }

  .serif {
    font: 400 1rem 'BioRhyme Expanded', serif;
    text-transform: uppercase;
  }
`;
