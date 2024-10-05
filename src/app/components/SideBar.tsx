import React from "react";
import "../../scss/sidebar.scss";
import { Box, IconButton, Typography, List, ListItem, ListItemIcon, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";

interface SideBarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <Box className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Header Section */}
      {!isCollapsed ? (
        <Box className='sidebar-header'>
          <img src='/icons/logo.svg' alt='Logo' className='logo' />

          <img src='/icons/vector.svg' alt='' className='collapse-button' onClick={onToggle} />
        </Box>
      ) : (
        <Box>
          <img src='/icons/logo.svg' alt='' height='34px' width='33px' style={{ margin: "35px 0" }} />
        </Box>
      )}

      {/* Middle Section */}
      <Box className={`sidebar-middle ${isCollapsed ? "collapsed" : ""}`}>
        {!isCollapsed ? (
          <Box className='new-chat-button'>
            <Box className='text'>
              <AddIcon className='icon' />
              <Typography variant='body1' sx={{ marginLeft: "8px", fontSize: "16px", fontWeight: "600" }}>
                새로운 채팅
              </Typography>
            </Box>
            <Box className='icon-box'>
              <img src='/icons/command.svg' alt='' />
              <img src='/icons/k.svg' alt='' />
            </Box>
          </Box>
        ) : (
          <img src='/icons/add-icon.svg' height='48px' width='48px' alt='' />
        )}

        {/* Chat History Section */}

        {!isCollapsed ? (
          <>
            <Box className='chat-history1'>
              <Typography className='history-title'>오늘</Typography>
              <List>
                <ListItem className='chat-item'>
                  <ListItemIcon className='search-icon'>
                    <img src='/icons/search.svg' alt='Search' />
                  </ListItemIcon>
                  <Typography className='text'>코로나19 후유증으로 알려진 '롱코</Typography>
                  <IconButton className='more-icon'>
                    <img src='/icons/more.svg' alt='More' />
                  </IconButton>
                </ListItem>
              </List>
            </Box>
            <Box className='chat-history2'>
              <Typography className='history-title'>지난 7일</Typography>
              <List>
                <ListItem className='chat-item'>
                  <ListItemIcon className='file-icon'>
                    <img src='/icons/file-icon.svg' alt='' />
                  </ListItemIcon>
                  <Typography className='text'>코로나19 변이 바이러스들은 기존 백</Typography>
                </ListItem>
              </List>
            </Box>{" "}
          </>
        ) : (
          <Box sx={{ height: "48px", width: "76px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src='/icons/history-icon.svg' height='24px' width='24px' alt='' />
          </Box>
        )}
      </Box>

      {/* Profile Section */}
      {!isCollapsed ? (
        <Box className='profile-section'>
          <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
            <Button variant='outlined' className='profile-img'></Button>
            <Stack className='profile-detail'>
              <Stack className='info-box'>
                <Typography className='name'>minseokbae</Typography>
                <IconButton className='settings-button'>
                  <SettingsIcon />
                </IconButton>
              </Stack>
              <Typography variant='caption' className='mail'>
                minseok@phnyx.ai
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Button
          variant='outlined'
          sx={{ width: "48px", height: "48px", padding: 0, minWidth: 0, margin: " 20px ", background: "#f1eefb" }}
        ></Button>
      )}
    </Box>
  );
};

export default SideBar;
