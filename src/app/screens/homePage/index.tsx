import { Box } from "@mui/material";
import React, { useState } from "react";
import HomeNavbar from "../../components/HomeNavbar";
import SideBar from "../../components/SideBar";
import SearchForm from "../../components/SearchForm";
import MainContent from "../../components/MainContent";

function HomePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <SideBar isCollapsed={isCollapsed} onToggle={handleToggleSidebar} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "margin-left 0.3s ease",
        }}
      >
        <HomeNavbar isCollapsed={isCollapsed} onToggle={handleToggleSidebar} />
        <Box sx={{ flexGrow: 1, width: "100%" }}>{/* <MainContent /> */}</Box>

        <SearchForm />
      </Box>
    </Box>
  );
}

export default HomePage;
