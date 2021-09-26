import {useState} from 'react'
import { useHistory } from 'react-router-dom';


import {AppBar, Toolbar,Typography,Button,IconButton, Drawer, List, ListItem, ListItemIcon,ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import PersonAddIcon from '@material-ui/icons/PersonAdd';


import useStyles from '../Header/Header.style';






export const Header = () => {
    const classes = useStyles()
    const [menuOpen, setMenuOpen] = useState(false)
    const history = useHistory()

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = (route) =>{
    history.push(route)
    handleToggleMenu()
  }

    return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=> handleToggleMenu()}

        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" component="div" >
          My App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
      <List>
        <ListItem button onClick={() => handleMenuClick('/')}>
          <ListItemIcon> <HomeIcon/> </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/customers')}>
          <ListItemIcon> <PersonAddIcon/> </ListItemIcon>
          <ListItemText>Cadastro cliente</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    </div>
  )
}

