import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box bg="#F8FAFC" minH="100vh">
      <Header />
      <Container maxW="container.lg" pt="80px" pb={12}>
        <Landing />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
