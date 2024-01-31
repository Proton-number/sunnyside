import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Stack, Typography } from "@mui/material";
import fruit1 from "/src/Components/images/desktop/image-graphic-design.jpg";
import fruit2 from "/src/Components/images/desktop/image-photography.jpg";
function Design() {
  return (
    <ParallaxLayer offset={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={fruit1}
            sx={{ width: "100%", height: "100%" }}
          />

          <Stack
            spacing={{ sm: 2 }}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: { xs: "50%", sm: "60%" },
              left: { lg: "0%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "40px", sm: "70px" } }}
            >
              Graphic Design
            </Typography>
            <Typography sx={{ width: "50%" }} variant="body2">
              Great design makes you memorable, We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={fruit2}
            sx={{ width: "100%", height: "100%" }}
          />
          <Stack
            spacing={{ sm: 2 }}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: { xs: "52%", sm: "60%" },
              left: { lg: "14%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "40px", sm: "70px" } }}
            >
              Photography
            </Typography>

            <Typography sx={{ width: "50%" }} variant="body2">
              Increase your credibility by getting the most tunning.
              high-quality photos that improve your business image.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </ParallaxLayer>
  );
}

export default Design;
