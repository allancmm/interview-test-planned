import styled  from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
   margin: var(--s-double) 10%;
`;


export const GlobalStyles = createGlobalStyle`
   html {
      font-family: Open Sans, sans-serif;
      background-color: var(--c-light-blue);
   }
   body {
      margin: 0;
   }
   :root {
      --c-black: #000;
      --c-white: #fff;
      --c-green: #3f9163;
      --c-light-blue: #f0f0f2;
      --c-light-grey: #d6d6d6;
      --s-half: 4px;
      --s-base: 8px;
      --s-double: calc(2 * var(--s-base));
   }
`;
