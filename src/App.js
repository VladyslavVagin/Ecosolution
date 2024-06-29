import React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero";
import MainValues from "./components/MainValues/MainValues";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <MainValues />
          <Electricity />
          <Cases />
        </Container>
      </main>
    </>
  );
}

export default App;
