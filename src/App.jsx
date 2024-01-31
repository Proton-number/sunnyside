import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import NavMobile from "./Components/NavMobile";
import Creatives from "./Components/Creatives";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Transform from "./Components/Transform";
import Stand from "./Components/Stand";
import Design from "./Components/Design";
import Testimonials from "./Components/Testimonials";
import Shapes from "./Components/Shapes";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <NavMobile />
      <Parallax
        pages={7}
        style={{
          backgroundColor: "#919191",
          color: "#040404",
          height: "100vh",
        }}
      >
        <Creatives />
        <Transform />
        <Stand />
        <Design />
        <Testimonials />
        <Shapes />
        <Footer />
      </Parallax>
    </>
  );
}

export default App;
