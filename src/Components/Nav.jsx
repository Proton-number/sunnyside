import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";

function Nav() {
  return (
    <div id="desktopNav">
      <AppBar sx={{ backgroundColor: "transparent", position:"absolute" }} elevation={0}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            sunnyside
          </Typography>

          <Stack direction="row" sx={{ alignItems: "center" }} spacing={4}>
            <Typography>About</Typography>
            <Typography>Services</Typography>
            <Typography>Projects</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                padding: "0.5rem 1rem",
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
