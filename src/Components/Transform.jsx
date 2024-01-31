import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

function Transform() {
  return (
    <ParallaxLayer offset={1}>
      <div>transform</div>
    </ParallaxLayer>
  );
}

export default Transform;
