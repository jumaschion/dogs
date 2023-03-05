import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', Georgia;
  --color-almost-black: #333;
  margin: 0;
  color:  var(--color-almost-black);
  font-family: var(--type-first);
  padding-top: 4rem;
}

h1, h1, h3, h4, p {
  margin: 0;
}

a {
  text-decoration: none;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

button, input {
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: var(--color-almost-black);
}

.container {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}



`;
