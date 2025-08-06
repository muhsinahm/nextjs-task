import { ArrowForwardIos } from "@mui/icons-material";
import { AppBar, Box, Button } from "@mui/material";
import React from "react";

const FooterSection = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0D0D0D",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          px: 3,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: "#424242",
            color: "white",
            textTransform: "none",
            borderRadius: "20px",
            px: 3,
            "&:hover": {
              borderColor: "#616161",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIos sx={{ fontSize: "1rem !important" }} />}
          sx={{
            bgcolor: "#E0BAFF",
            color: "#3C1053",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 3,
            "&:hover": {
              bgcolor: "#ce93d8",
            },
          }}
        >
          Next
        </Button>
      </Box>
    </AppBar>
  );
};

export default FooterSection;
