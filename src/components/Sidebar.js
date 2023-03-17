import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SubjectIcon from '@mui/icons-material/Subject';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Dashboard } from '@mui/icons-material';

const drawerWidth = 220;


 
export default function Sidebar() {


  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
          PaperProps={{
            sx: {
              // backgroundColor: "#0091ea",
              color:"#000",
              
            }
          }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/* <Divider /> */}
        <List>
          
            <ListItem  disablePadding>
              <ListItemButton href='/'>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          
            <ListItem  disablePadding>
              <ListItemButton href='/plans'>
                <ListItemIcon>
                  <SubscriptionsIcon/>
                </ListItemIcon>
                <ListItemText primary="Plans" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton href='/questions'>
                <ListItemIcon>
                  <UploadFileIcon/>
                </ListItemIcon>
                <ListItemText primary="Questions" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton href='/subjects'>
                <ListItemIcon>
                  <SubjectIcon/>
                </ListItemIcon>
                <ListItemText primary="Subjects" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton href='/authentication'>
                <ListItemIcon>
                  <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Authentication" />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
              <ListItemButton href='/statistics'>
                <ListItemIcon>
                  <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
            </ListItem>
        </List>
        {/* <Divider /> */}
        
      </Drawer> 
    </Box>
    
      </>
      );
}