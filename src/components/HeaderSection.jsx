import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const userAvatar = "https://i.pravatar.cc/70";

export default function HeaderSection() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0D0D0D",
        color: "#FFFFFF",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "medium" }}
            >
              Media management 🪄
            </Typography>
            <Typography variant="body2">Draft campaign</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: "medium" }}
            >
              Jane Cooper
            </Typography>
            <Link
              href="#"
              underline="always"
              sx={{
                color: "#BE93D4",
                fontSize: "0.875rem",
              }}
            >
              Change profile
            </Link>
          </Box>
          <Avatar alt="Jane Cooper" src={userAvatar} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
