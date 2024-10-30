import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --almost-white: hsl(0, 0%, 98%);
  --medium-gray: hsl(0, 0%, 41%);
  --almost-black: hsl(0, 0%, 8%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 50%;
  
  @media (min-width: 790px) {
    font-size: 62.5%;
  }
}

body {
  font-family: "Epilogue", sans-serif;
  font-size: 1.8rem;
  color: var(--medium-gray);
  transition: all 1s;
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
