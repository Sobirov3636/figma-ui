import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import "../../scss/navbar.scss";

interface HomeNavbarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <Box position='fixed' className='navbar' sx={{ width: isCollapsed ? "calc(100% - 90px)" : "calc(100% - 270px)" }}>
      <Box className='content'>
        {isCollapsed && (
          <img
            src='icons/expand.svg'
            height='34px'
            width='34px'
            style={{ marginTop: "12px", marginRight: "30px", cursor: "pointer" }}
            alt='Expand'
            onClick={onToggle}
          />
        )}

        <Typography variant='h6' component='div' className='navbar-title'>
          코로나19 후유증으로 알려진 '롱코비드'는 정확히
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeNavbar;
