import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import orangeDesktop from "/src/Components/images/desktop/image-header.jpg";
import orangeMobile from "/src/Components/images/mobile/image-header.jpg";
import { ParallaxLayer } from "@react-spring/parallax";

function Creatives() {
  return (
    <ParallaxLayer offset={0}>
      <Stack
        sx={{
          backgroundColor: "hsl(195, 100%, 50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{ position: "absolute", top: "25%", textAlign: "center" }}
        >
          {" "}
          WE ARE CREATIVES
        </Typography>
        <Box
          component="img"
          alt="orange"
          src={orangeMobile}
          id="mobile-orange"
          sx={{ width: "420px", height: "770px" }}
        />
        <Box
          component="img"
          alt="orange"
          id="desktop-orange"
          src={orangeDesktop}
          sx={{
            width: { sm: "1400px", lg: "90%" },
            height: { sm: "900px", lg:"auto" },
          }}
        />
      </Stack>
    </ParallaxLayer>
  );
}

export default Creatives;
