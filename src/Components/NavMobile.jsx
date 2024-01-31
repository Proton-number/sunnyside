import React from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function NavMobile() {
  return (
    <div id="mobileNav">
      <AppBar>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            sunnyside
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavMobile;
