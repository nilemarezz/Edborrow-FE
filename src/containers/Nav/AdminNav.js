import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { withRouter } from 'react-router-dom'
import { route } from '../../systemdata/route'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminNav = (props) => {
  const classes = useStyles();
  const Redirect = (path) => {
    props.history.push(path)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Edborrow
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={() => Redirect(route.admin.dashboard)}>
              <ListItemIcon><BarChartIcon /> </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.admin.applicationList)}>
              <ListItemIcon><AssignmentIcon /> </ListItemIcon>
              <ListItemText primary={"Application List"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FeaturedPlayListIcon /> </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PostAddIcon /> </ListItemIcon>
              <ListItemText primary={"Add Items"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(AdminNav)