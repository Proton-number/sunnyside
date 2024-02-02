import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import orangeDesktop from "/src/Components/images/desktop/image-header.jpg";
import orangeMobile from "/src/Components/images/mobile/image-header.jpg";
import { ParallaxLayer } from "@react-spring/parallax";
import arrow from "/src/Components/images/icon-arrow-down.svg";
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
          sx={{
            position: "absolute",
            top: { xs: "25%", lg: "30%" },
            textAlign: "center",
          }}
        >
          {" "}
          WE ARE CREATIVES
        </Typography>
        <Box
          component="img"
          src={arrow}
          sx={{
            position: "absolute",
            top: { xs: "45%", sm: "50%" },
            left: {xs:"46%", sm: "48%", lg: "49%" },
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            component="img"
            alt="orange"
            src={orangeMobile}
            id="mobile-orange"
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <ParallaxLayer offset={0.4} speed={0.7}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="orange"
              id="desktop-orange"
              src={orangeDesktop}
              sx={{
                width: "200%",
                height: "100%",
              }}
            />
          </Box>
        </ParallaxLayer>
      </Stack>
    </ParallaxLayer>
  );
}

export default Creatives;
