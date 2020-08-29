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
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import { withRouter } from 'react-router-dom'
import { route } from '../../systemdata/route'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logoutSuccess } from "../../actions/UserAction";
import { clearToken } from '../../utilities/check/checkToken'
import { useSnackbar } from "notistack";
import { connect } from 'react-redux'
import BusinessIcon from '@material-ui/icons/Business';
import ListIcon from '@material-ui/icons/List';
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

const SystemAdmin = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const Redirect = (path) => {
    props.history.push(path)
  }
  const Logout = () => {
    props.Logout();
    enqueueSnackbar("Logout Success!", {
      variant: "success",
    });
    props.history.push(route.auth.login);
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
            <ListItem button onClick={() => Redirect(route.systemadmin.addItem)}>
              <ListItemIcon><BarChartIcon /> </ListItemIcon>
              <ListItemText primary={"Add Item"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.addDepartment)}>
              <ListItemIcon><BusinessIcon /> </ListItemIcon>
              <ListItemText primary={"Add Department"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.items)}>
              <ListItemIcon><FeaturedPlayListIcon /> </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.departmentList)}>
              <ListItemIcon><ListIcon /> </ListItemIcon>
              <ListItemText primary={"Department List"} />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => Logout()}>
              <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
              <ListItemText primary={"Logout"} />
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

export const mapDispatchToProps = (dispatch, ownProps) => ({
  Logout: async () => {
    clearToken();
    dispatch(logoutSuccess());
  },
});

export const mapStateToProps = (state) => {
  return { user: state.User }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SystemAdmin))