import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Stack, Typography, Avatar } from "@mui/material";
import emily from "/src/Components/images/image-emily.jpg";
import thomas from "/src/Components/images/image-thomas.jpg";
import jennie from "/src/Components/images/image-jennie.jpg";
function Testimonials() {
  return (
    <ParallaxLayer offset={4}>
      <Stack
        spacing={{ sm: 8 }}
        sx={{
          backgroundColor: "hsl(30, 100%, 98%)",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "20px", sm: 0 },
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          CLIENT TESTIMONIALS
        </Typography>

        <Stack spacing={{ xs: 1, lg: 0 }} direction={{ sm: "row" }}>
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <Avatar src={emily} />
            <Typography
              sx={{ width: { xs: "90%", lg: "50%" } }}
              variant="subtitle3"
            >
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </Typography>
            <Stack spacing={0.5}>
              <Typography>
                <b>Emily R.</b>
              </Typography>
              <Typography>Marketing Director</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <Avatar src={thomas} />
            <Typography
              sx={{ width: { xs: "90%", lg: "50%" } }}
              variant="subtitle3"
            >
              {" "}
              Sunnysides enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </Typography>
            <Stack spacing={0.5}>
              <Typography>
                <b>Thomas S.</b>
              </Typography>
              <Typography>Chief Operating Officer</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <Avatar src={jennie} />
            <Typography
              sx={{ width: { xs: "90%", lg: "50%" } }}
              variant="subtitle3"
            >
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </Typography>
            <Stack spacing={{ sm: 0.5 }}>
              <Typography variant="h6">
                <b>Jennie F.</b>
              </Typography>
              <Typography>Business Owner</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default Testimonials;
