import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MockNavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Edborrow
          </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTheme: async (e) => {
    dispatch({ type: "CHANGE_THEME", payload: e.target.checked });
  }
});

export const mapStateToProps = (state) => {
  return { darkmode: state.WEB_CONFIG.darkmode }
}

export default connect(mapStateToProps, mapDispatchToProps)(MockNavBar)