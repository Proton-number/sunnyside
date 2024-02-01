import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Stack, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { motion } from "framer-motion";

function Footer() {
  return (
    <ParallaxLayer offset={6}>
      <Stack
        spacing={8}
        sx={{
          backgroundColor: "hsl(168, 55%, 65%)",
          color: "hsl(170, 81%, 30%)",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: {xs:"50px", lg: "120px" }}}>
          sunnyside
        </Typography>
        <Stack direction="row" spacing={8}>
          <Typography
            component={motion.p}
            whileHover={{ y: 10, duration: 0.8 }}
            sx={{ cursor: "pointer" }}
          >
            About
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: 10, duration: 0.8 }}
            sx={{ cursor: "pointer" }}
          >
            Services
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: 10, duration: 0.8 }}
            sx={{ cursor: "pointer" }}
          >
            Projects
          </Typography>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <FacebookIcon sx={{ color: "hsl(170, 81%, 30%)" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "hsl(170, 81%, 30%)" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "hsl(170, 81%, 30%)" }} />
          </IconButton>
          <IconButton>
            <PinterestIcon sx={{ color: "hsl(170, 81%, 30%)" }} />
          </IconButton>
        </Stack>
      </Stack>
    </ParallaxLayer>
  );
}

export default Footer;
