import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Stack, Typography } from "@mui/material";
import bottle from "/src/Components/images/desktop/image-gallery-milkbottles.jpg";
import orange from "/src/Components/images/desktop/image-gallery-orange.jpg";
import cone from "/src/Components/images/desktop/image-gallery-cone.jpg";
import cubes from "/src/Components/images/desktop/image-gallery-sugarcubes.jpg";
function Shapes() {
  return (
    <ParallaxLayer offset={5} speed={0.8}>
      <Stack direction={{ xs: "column", lg: "row" }}>
        <Stack direction="row">
          <Box
            sx={{
              height: { xs: "50vh", lg: "100vh" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={bottle}
              sx={{
                width: { xs: "100%", sm: "100%" },
                height: { xs: "100%", sm: "100%" },
              }}
            />
          </Box>
          <Box
            sx={{
              height: { xs: "50vh", lg: "100vh" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={orange}
              sx={{
                width: { xs: "100%", sm: "100%" },
                height: { xs: "100%", sm: "100%" },
              }}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            sx={{
              height: { xs: "50vh", lg: "100vh" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={cone}
              sx={{
                width: { xs: "100%", sm: "100%" },
                height: { xs: "100%", sm: "100%" },
              }}
            />
          </Box>
          <Box
            sx={{
              height: { xs: "50vh", lg: "100vh" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={cubes}
              sx={{
                width: { xs: "100%", sm: "100%" },
                height: { xs: "100%", sm: "100%" },
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default Shapes;
