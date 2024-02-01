import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Nav() {
  return (
    <div id="desktopNav">
      <AppBar
        sx={{ backgroundColor: "transparent", position: "absolute" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            sunnyside
          </Typography>

          <Stack direction="row" sx={{ alignItems: "center" }} spacing={4}>
            <Typography
              component={motion.p}
              whileHover={{ y: -5, duration: 0.8 }}
              sx={{ cursor: "pointer" }}
            >
              About
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -5, duration: 0.8 }}
              sx={{ cursor: "pointer" }}
            >
              Services
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -5, duration: 0.8 }}
              sx={{ cursor: "pointer" }}
            >
              Projects
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "hsl(193, 100%, 60%)",
                  color: "white",
                },
              }}
              disableElevation
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
