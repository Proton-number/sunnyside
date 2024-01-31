import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import emily from "/src/Components/images/image-emily.jpg";
import thomas from "/src/Components/images/image-thomas.jpg";
import jennie from "/src/Components/images/image-jennie.jpg";
function Testimonials() {
  return (
    <ParallaxLayer offset={4}>
      <Stack
        spacing={8}
        sx={{
          backgroundColor: "hsl(30, 100%, 98%)",
          display: "flex",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">CLIENT TESTIMONIALS</Typography>
        <Stack spacing={{lg:12}} direction={{ sm: "row" }}>
          <Stack>
            <Avatar src={emily} />
            <Typography></Typography>
            <Stack>
              <Typography></Typography>
              <Typography></Typography>
            </Stack>
          </Stack>
          <Stack>
            <Avatar src={thomas} />
            <Typography></Typography>
            <Stack>
              <Typography></Typography>
              <Typography></Typography>
            </Stack>
          </Stack>
          <Stack>
            <Avatar src={jennie} />
            <Typography></Typography>
            <Stack>
              <Typography></Typography>
              <Typography></Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default Testimonials;
