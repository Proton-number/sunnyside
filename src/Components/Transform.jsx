import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import eggDesktop from "/src/Components/images/desktop/image-transform.jpg";

function Transform() {
  return (
    <ParallaxLayer offset={1} speed={1} factor={0.8}>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "hsl(30, 100%, 98%)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // padding: "30px",
          }}
        >
          <Stack
            spacing={3}
            sx={{ padding: "40px", textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography variant="h3">Transform your brand</Typography>
            <Typography variant="body2" sx={{ width: { lg: "70%" } }}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Typography>
            <Typography
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textDecorationColor: "hsl(49, 100%, 50%)",
                },
              }}
            >
              LEARN MORE
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={eggDesktop}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    </ParallaxLayer>
  );
}

export default Transform;
