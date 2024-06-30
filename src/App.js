import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero";
import MainValues from "./components/MainValues/MainValues";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import Questions from "./components/Questions/Questions";
import ContactUs from "./components/ContactUs/ContactUs";
import 'react-toastify/dist/ReactToastify.css';

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
          <Questions />
          <ContactUs />
        </Container>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
