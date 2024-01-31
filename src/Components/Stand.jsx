import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Stack, Typography } from "@mui/material";
import cup from "/src/Components/images/desktop/image-stand-out.jpg";
function Stand() {
  return (
    <ParallaxLayer offset={2} style={{ backgroundColor: "hotpink" }}>
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
          }}
        >
          <Box
            component="img"
            src={cup}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Stack
          spacing={3}
          sx={{
            backgroundColor: "hsl(30, 100%, 98%)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={2} sx={{ width:"80%", padding: "40px", textAlign:{xs:"center",sm:"right" } }}>
            <Typography variant="h3">
              Stand out to the right audience
            </Typography>

            <Typography variant="body2" sx={{}}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </Typography>
            <Typography>LEARN MORE</Typography>
          </Stack>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default Stand;
