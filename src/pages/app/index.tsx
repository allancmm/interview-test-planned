import React from 'react';
import { Header, Footer } from "../../components";
import Users from "../users";
import { GlobalStyles, AppContainer, MainContainer,  } from "./style";

const App = () =>
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
    </>;

export default App;
