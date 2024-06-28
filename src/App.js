import React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero";
import MainValues from "./components/MainValues/MainValues";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <MainValues />
        </Container>
      </main>
    </>
  );
}

export default App;
