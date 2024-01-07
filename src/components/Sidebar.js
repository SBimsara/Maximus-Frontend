import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SubjectIcon from "@mui/icons-material/Subject";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Dashboard } from "@mui/icons-material";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

import Nav from "../routes/Statistics/navBar/Nav";

const drawerWidth = 220;

const listItem = {
  "&.Mui-selected": {
    backgroundColor: "#ff0000",
  },
};

export default function Sidebar() {
  const location = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

      
        <Drawer
          PaperProps={{
            sx: {
             
              color: "#000",
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div
            className="logo"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="./all-image/logo.jpg"
              alt=""
              className="logo"
              width="150px"
              height="150px"
              style={{ alignSelf: "center" }}
            />
          </div>
          <Toolbar />
          <List>
            <ListItem disablePadding style={{ marginBottom: "15px" }}>
              <ListItemButton
                href="/dashboard"
                selected={location.pathname === "/dashboard" ? true : false}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={{ marginBottom: "15px" }}>
              <ListItemButton
                href="/addPlans"
                selected={
                  location.pathname === "/addPlans" ||
                  location.pathname === "/planDe"
                    ? true
                    : false
                }
              >
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Add Plans" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={{ marginBottom: "15px" }}>
              <ListItemButton
                href="/questions"
                selected={location.pathname === "/questions" ? true : false}
              >
                <ListItemIcon>
                  <UploadFileIcon />
                </ListItemIcon>
                <ListItemText primary="Questions" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={{ marginBottom: "15px" }}>
              <ListItemButton
                href="/subjects"
                selected={location.pathname === "/subjects" ? true : false}
              >
                <ListItemIcon>
                  <SubjectIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={{ marginBottom: "15px" }}>
              <ListItemButton
                href="/lessons"
                selected={location.pathname === "/lessons" ? true : false}
              >
                <ListItemIcon>
                  <SubjectIcon />
                </ListItemIcon>
                <ListItemText primary="Lessons" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton
                href="/statistics"
                selected={location.pathname === "/statistics" ? true : false}
              >
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
