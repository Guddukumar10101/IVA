import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BiSolidGroup } from "react-icons/bi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';


import './Admin.css'
import axios from 'axios';
import { useEffect } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function AdmisionDashbord() {



    const fetchUser = async () => {
      try {
      const token = localStorage.getItem('token')
      const response = axios.get('http://localhost:8081/auth/home ', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      if(response.status !==201  ){
        alert("hii")
        useNavigate('/Admin-Login')
      }
 }catch (error) {
  useNavigate('/Login')
  alert("hii err")
  console.log(error)
        
      }
    
useEffect(()=>{
 fetchUser()
},[])
     
    }


  const listitemname = { 'home': [<HomeOutlinedIcon />, ''], 'Students': [<PeopleAltIcon />, 'AllStudents'], 'Feedetails': [<MonetizationOnIcon />, 'StudentFee'], 'AdmisionRequest': [<NotificationsActiveIcon />, 'AdmisionRequest'] }

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Inspired Vision Trust
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='MainList' style={{ textDecorationLine: 'none' }}>


          {
            Object.entries(listitemname).map(([key, value]) =>
              <ListItem style={{ textDecorationLine: 'none' }} disablePadding sx={{ display: 'block' }}>
                <Link to={value[1]}>
                  <ListItemButton className='listButton'
                    style={{ textDecorationLine: 'none' }}
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                          justifyContent: 'initial',
                        }
                        : {
                          justifyContent: 'center',
                        },
                    ]}
                  >
                    <ListItemIcon className='listIcon'
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: 'center',
                        },
                        open
                          ? {
                            mr: 3,
                          }
                          : {
                            mr: 'auto',
                          },
                      ]}
                    >
                      {value[0]}
                    </ListItemIcon>
                    <ListItemText className='listText'
                      color='success'
                      primary={key}
                      sx={


                        [
                          open
                            ? {
                              opacity: 1,
                            }
                            : {
                              opacity: 0,
                            },
                        ]}
                    />
                  </ListItemButton></Link>
              </ListItem>

            )
          }




        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>


        </Typography>
        <Typography sx={{ marginBottom: 2 }}>

        </Typography>
        <Outlet />
      </Box>

    </Box>
  );
}
