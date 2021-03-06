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
import ListIcon from '@material-ui/icons/List';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    marginLeft: 20
  }
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
            <ListItem button onClick={() => Redirect(route.systemadmin.items)}>
              <ListItemIcon><FeaturedPlayListIcon /> </ListItemIcon>
              <ListItemText primary={"Items"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.departmentList)}>
              <ListItemIcon><ListIcon /> </ListItemIcon>
              <ListItemText primary={"Department List"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.userList)}>
              <ListItemIcon><PersonIcon /> </ListItemIcon>
              <ListItemText primary={"User List"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.syetemLog)}>
              <ListItemIcon><PermDataSettingIcon /> </ListItemIcon>
              <ListItemText primary={"System Logs"} />
            </ListItem>
            <ListItem button onClick={() => Redirect(route.systemadmin.systemos)}>
              <ListItemIcon><ComputerIcon /> </ListItemIcon>
              <ListItemText primary={"System Information"} />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => Logout()}>
              <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
          <Divider />
          <div className={classes.bottomPush}>
            <FormControlLabel
              style={{ justifyContent: "center", alignItems: 'center' }}
              control={
                <Switch
                  checked={props.darkmode}
                  onChange={(e) => props.changeTheme(e)}
                  name="checkedB"
                  color="secondary"
                />
              }
              label="Dark Mode"
            />
          </div>
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
  changeTheme: async (e) => {
    dispatch({ type: "CHANGE_THEME", payload: e.target.checked });
  }
});

export const mapStateToProps = (state) => {
  return { user: state.User, darkmode: state.WEB_CONFIG.darkmode }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SystemAdmin))