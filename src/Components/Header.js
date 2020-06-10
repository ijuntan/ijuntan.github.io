import React,{useState} from 'react';
import {    AppBar,Toolbar,CssBaseline,Button,Grid,Divider,
            ListItem,ListItemText,ListItemIcon,Drawer,IconButton,Hidden 
        } from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import { ChevronLeft,ChevronRight,Home,Receipt,AccountBalance,ShoppingCart,PermIdentity,LocalOffer }  from '@material-ui/icons';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = '40vw';

const media = [
    {text:'Home',link:'/dashboard',icon:<Home/>},
    {text:'Stok',link:'/dashboard',icon:<AccountBalance/>},
    {text:'Penjualan',link:'/dashboard',icon:<LocalOffer/>},
    {text:'Pembelian',link:'/dashboard',icon:<ShoppingCart/>},
    {text:'Laporan',link:'/dashboard',icon:<Receipt/>},
    {text:'Akun',link:'/dashboard',icon:<PermIdentity/>},
]

const useStyles = makeStyles((theme) => ({
  menuFont:{
    fontSize:'1.5vw',
    display:'flex',
    "& $div" : {
        padding:'0.6vh 0.5vw 0 0'
    }
  },
  button:{
    color:'white',
    width:'100%',
    minHeight:'10vh',
    padding:'0 2vw 0'
  },
  drawerPaper: {
    width: drawerWidth, 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItemText:{
    paddingLeft:'2vh',
    fontSize:'2vh'
  },
  listText:{
    fontSize:'2.5vh'
  }
}));


const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open,setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

    return (
        <div>
            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <Hidden mdUp >

                        <IconButton
                            color="inherit"
                            onClick={handleDrawerToggle}
                            >
                            <MenuIcon />
                        </IconButton>
                        
                        <Drawer
                            className={classes.drawer}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={open}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted:true
                            }}
                        >
                            
                            <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerToggle}>
                                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                            </IconButton>
                            </div>

                            <Divider/>

                            {
                                media.map((item)=>(
                                    <ListItem button >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText>
                                            <div 
                                                className={classes.listText} 
                                                onClick={handleDrawerToggle} 
                                                component={Link} to={item.link}
                                            >
                                                {item.text}
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </Drawer>

                    </Hidden>

                    <Hidden mdDown >
                        {
                            media.map((item)=>(
                                <Grid container item xs={2} justify='center' alignItems='center'>
                                    <Button 
                                        className={classes.button}
                                        component={Link} to={item.link}
                                        disableRipple 
                                    >
                                        <div className={classes.menuFont}  >
                                            <div>{item.icon}</div>
                                            {item.text}
                                        </div>
                                    </Button>
                                </Grid>
                            ))
                        }
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header