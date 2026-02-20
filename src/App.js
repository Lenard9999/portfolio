import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      bg="#090914"
      sx={{
        backgroundImage: `
          radial-gradient(ellipse at top, rgba(26, 26, 62, 0.9) 0%, transparent 55%),
          radial-gradient(ellipse at bottom right, rgba(62, 10, 10, 0.3) 0%, transparent 50%)
        `,
        backgroundAttachment: "fixed",
      }}
      minH="100vh"
    >
      <div className="star-layer-1" />
      <div className="star-layer-2" />
      <div className="star-layer-3" />
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
