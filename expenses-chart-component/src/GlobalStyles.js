import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --dark-brown: hsl(25, 47%, 15%);
  --medium-brown: hsl(28, 10%, 53%);
  --cream: hsl(27, 66%, 92%);
  --very-pale-orange: hsl(33, 100%, 98%);

  --soft-red: hsl(10, 79%, 65%);
  --cyan: hsl(186, 34%, 60%);

  --rounded: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family:"DM Sans", serif;
  background-color: var(--cream);
  font-size: 1.8rem;

  position: relative;
  height: 100vh;   
}

ul {
  list-style: none;
  padding: 0;
}

p {
  font-size: 1.4rem;
  
}

h1,
h2,
h3,
span {
  font-weight: 700;
}



`;

export default GlobalStyles;
