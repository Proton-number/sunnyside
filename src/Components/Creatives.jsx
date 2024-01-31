import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import orangeDesktop from "/src/Components/images/desktop/image-header.jpg";
import orangeMobile from "/src/Components/images/mobile/image-header.jpg";
import { ParallaxLayer } from "@react-spring/parallax";

function Creatives() {
  return (
    <ParallaxLayer  offset={0}>
      <Stack
        sx={{
          backgroundColor: "hsl(195, 100%, 50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2"> WE ARE CREATIVES</Typography>
        <Box
          component="img"
          alt="orange"
          srcSet={`${orangeMobile} 600w, ${orangeDesktop} `}
          sx={{ width: "800px", height: "auto" }}
        />
      </Stack>
    </ParallaxLayer>
  );
}

export default Creatives;
