import React, { useState } from "react";
import {
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavMobile() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{ backgroundColor: "transparent" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            sunnyside
          </Typography>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "hsl(186, 100%, 76%)",
          },
        }}
        id="drawer"
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box>
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>

          <Stack
            spacing={8}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              padding: "35px",
            }}
          >
            <Typography sx={{ cursor: "pointer" }}>About</Typography>
            <Typography sx={{ cursor: "pointer" }}>Services</Typography>
            <Typography sx={{ cursor: "pointer" }}>Projects</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                width: "40%",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "hsl(193, 100%, 60%)",
                  color: "white",
                },
              }}
              disableElevation
            >
              CONTACT
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default NavMobile;
