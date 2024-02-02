import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import NavMobile from "./Components/NavMobile";
import Creatives from "./Components/Creatives";
import { Parallax } from "@react-spring/parallax";
import Transform from "./Components/Transform";
import Stand from "./Components/Stand";
import Design from "./Components/Design";
import Testimonials from "./Components/Testimonials";
import Shapes from "./Components/Shapes";
import Footer from "./Components/Footer";
import { Box, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Fraunces, sans-serif",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Parallax
          pages={7}
          style={{
            backgroundColor: "#C9F7FF",
            color: "hsl(171, 100%, 28%)",
            height: "100vh",
          }}
        >
          <Nav />
          <NavMobile />
          <Creatives />
          <Transform />

          <Transform />
          <Stand />
          <Design />
          <Testimonials />
          <Shapes />
          <Footer />
        </Parallax>
      </ThemeProvider>
    </>
  );
}

export default App;
