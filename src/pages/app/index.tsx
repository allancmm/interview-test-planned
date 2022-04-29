import React from 'react';
import { Header, Footer } from "../../components";
import Users from "../users";
import { AppContainer, MainContainer,  } from "./style";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html {
      font-family: Open Sans, sans-serif;
      background-color: var(--c-light-blue);
   }
   body {
      margin: 0;
   }
   :root {
      --c-white: #fff;
      --c-light-blue: #f0f0f2;
      --s-base: 8px;
      --s-double: calc(2 * var(--s-base));
   }
`;

const App = () => {
  return (
      <>
        {/* TODO - create a theme for default css properties */}
        <GlobalStyles />
        <AppContainer>
          <Header />
            <MainContainer>
               <Users />
            </MainContainer>
          <Footer />
        </AppContainer>
      </>
  );
}

export default App;
