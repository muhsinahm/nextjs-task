"use client";

import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Button,
  FormControl,
  Stack,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    primary: {
      main: "#7E57C2",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const contentTypes = [
  "Fun",
  "Education",
  "Sports",
  "News",
  "Investment",
  "Facts",
];

const subTopics = {
  Fun: [
    "Board games revival",
    "Comedy trends",
    "Amusement parks",
    "Escape rooms",
    "Street performances",
    "Online challenges",
    "Festivals impact",
    "Crafting movement",
    "Social gaming",
    "Virtual reality",
  ],
  Education: [
    "Gamified learning",
    "Education systems",
    "Bilingual benefits",
    "Standardized testing",
    "Arts in schools",
    "Tech bootcamps",
    "Homeschooling dynamics",
    "Mentorship importance",
    "Educational equity",
    "Mobile learning",
  ],
  Sports: [
    "Sports medicine",
    "Team sociology",
    "Olympic economics",
    "Gender parity",
    "Fandom psychology",
    "Extreme sports",
    "Sports business",
    "Youth athletics",
    "Data analytics",
  ],
  News: [
    "Citizen journalism",
    "Whistleblower influence",
    "Fake news",
    "Print media survival",
    "Social media news",
    "Cybersecurity news",
    "Democratic media",
    "News deserts",
    "News economics",
    "Broadcast evolution",
  ],
  Investment: [
    "Robo-advising",
    "Cryptocurrency trends",
    "Sustainable investing",
    "Real estate markets",
    "Stock market analysis",
  ],
  Facts: [
    "Historical myths debunked",
    "Scientific discoveries",
    "Surprising statistics",
    "Psychological facts",
    "Animal kingdom oddities",
  ],
};

function ContentSelection() {
  const [selectedType, setSelectedType] = useState("Fun");
  const [selectedSubTopic, setSelectedSubTopic] = useState("");

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedSubTopic("");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          bgcolor: "background.default",
          p: { xs: 3, sm: 4, md: 5 },
          gap: 4,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: "medium",
            }}
          >
            What type of content are you creating?
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 1 }}>
          {contentTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "contained" : "outlined"}
              onClick={() => handleTypeChange(type)}
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "medium",
                px: 3,
                py: 1,
                minWidth: "auto",
                borderColor: "rgba(255, 255, 255, 0.23)",
                color: selectedType === type ? "white" : "text.primary",
                backgroundColor:
                  selectedType === type ? "primary.main" : "transparent",
                "&:hover": {
                  backgroundColor:
                    selectedType === type
                      ? "primary.dark"
                      : "rgba(255, 255, 255, 0.08)",
                  borderColor:
                    selectedType !== type
                      ? "rgba(255, 255, 255, 0.5)"
                      : "transparent",
                },
              }}
            >
              {type}
            </Button>
          ))}
        </Stack>

        <Box>
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "medium", mb: 2 }}
          >
            Which type of "{selectedType}" content do you want to create?
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="sub-topic-select-label">Select</InputLabel>
            <Select
              labelId="sub-topic-select-label"
              id="sub-topic-select"
              value={selectedSubTopic}
              label="Select"
              onChange={(e) => setSelectedSubTopic(e.target.value)}
              sx={{ borderRadius: "16px" }}
            >
              {subTopics[selectedType].map((topic) => (
                <MenuItem key={topic} value={topic}>
                  {topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </ThemeProvider>
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "flex-start",
    //       minHeight: "100vh",
    //       bgcolor: "background.default",
    //       p: { xs: 3, sm: 4, md: 5 },
    //       gap: 4,
    //     }}
    //   >
    //     <Box>
    //       <Typography
    //         variant="h5"
    //         component="h1"
    //         sx={{
    //           fontWeight: "medium",
    //         }}
    //       >
    //         What type of content are you creating?
    //       </Typography>
    //     </Box>

    //     <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 1 }}>
    //       {contentTypes.map((type) => (
    //         <Button
    //           key={type}
    //           variant={selectedType === type ? "contained" : "outlined"}
    //           onClick={() => setSelectedType(type)}
    //           sx={{
    //             borderRadius: "20px",
    //             textTransform: "none",
    //             fontWeight: "medium",
    //             px: 3,
    //             py: 1,
    //             minWidth: "auto",
    //             borderColor: "rgba(255, 255, 255, 0.23)",
    //             color: selectedType === type ? "white" : "text.primary",
    //             backgroundColor:
    //               selectedType === type ? "primary.main" : "transparent",
    //             "&:hover": {
    //               backgroundColor:
    //                 selectedType === type
    //                   ? "primary.dark"
    //                   : "rgba(255, 255, 255, 0.08)",
    //               borderColor:
    //                 selectedType !== type
    //                   ? "rgba(255, 255, 255, 0.5)"
    //                   : "transparent",
    //             },
    //           }}
    //         >
    //           {type}
    //         </Button>
    //       ))}
    //     </Stack>

    //     <Box>
    //       <Typography variant="h6" component="h2" sx={{ fontWeight: "medium" }}>
    //         Which type of "{selectedType}" content do you want to create?
    //       </Typography>
    //     </Box>
    //   </Box>
    // </ThemeProvider>
  );
}

export default ContentSelection;
