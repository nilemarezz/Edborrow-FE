import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import { logoutSuccess } from "../../actions/UserAction";
import HelpIcon from "@material-ui/icons/Help";
import Modal from "../../components/Modal";
import { instruction } from '../../systemdata/instruction'
import { clearToken } from '../../utilities/check/checkToken'
import { route } from '../../systemdata/route'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components'

const StyledMenuItem = styled(MenuItem)`
  color : ${props => props.darkmode ? "white" : "black"};
`
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Nav = (props) => {

  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={route.user.profile} className={classes.link}>
        <StyledMenuItem darkmode={props.WEB_CONFIG.darkmode} onClick={handleMenuClose}>Profile</StyledMenuItem>
      </Link>
      <Link to={route.user.applicationList} className={classes.link}>
        <StyledMenuItem darkmode={props.WEB_CONFIG.darkmode} onClick={handleMenuClose}>Request</StyledMenuItem>
      </Link>

      {props.User.department === true || props.User.staff === true ?
        <Link to={route.admin.dashboard} className={classes.link}>
          <StyledMenuItem darkmode={props.WEB_CONFIG.darkmode} onClick={handleMenuClose}>Profile</StyledMenuItem>
        </Link> : null}
      <MenuItem
        onClick={() => {
          handleMenuClose();
          props.Logout();
          enqueueSnackbar("Logout Success!", {
            variant: "success",
          });
          props.history.push("/login");
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to={route.user.cart} style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={props.Item.Cart.length} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>

          <p>Cart</p>
        </MenuItem>
      </Link>


      <MenuItem onClick={handleMenuClose}>
        <FormControlLabel
          style={{ justifyContent: "center" }}
          control={
            <Switch
              checked={props.WEB_CONFIG.darkmode}
              onChange={(e) => props.changeTheme(e)}
              name="checkedB"
              color="secondary"
            />
          }
          label="Dark Mode"
        />
      </MenuItem>
      {localStorage.getItem("userToken") ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>{props.User.user}</p>
        </MenuItem>
      ) : (
          <Link to={route.auth.login} className={classes.link}>
            <MenuItem onClick={handleMenuClose}>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <ExitToAppIcon />
              </IconButton>
              <p>Login</p>
            </MenuItem>
          </Link>
        )}
    </Menu>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Link to={route.home} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" noWrap>
              EdBorrow
            </Typography>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* Item menu bar on desktop */}
            <FormControlLabel
              style={{ justifyContent: "center" }}
              control={
                <Switch
                  checked={props.WEB_CONFIG.darkmode}
                  onChange={(e) => props.changeTheme(e)}
                  name="checkedB"
                  color="secondary"
                />
              }
              label="Dark Mode"
            />
            <IconButton
              aria-label="add"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <HelpIcon />
            </IconButton>
            <Link to={route.user.cart} style={{ textDecoration: "none", color: "white" }}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={props.Item.Cart.length} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Link>

            {localStorage.getItem("userToken") ? (
              <Button
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleProfileMenuOpen}
                aria-controls={menuId}
              >
                <AccountCircle />
                <span style={{ fontSize: 14, marginLeft: 10 }}>
                  {props.User.user}
                </span>
              </Button>
            ) : (
                <MenuItem>
                  <Link
                    to={route.auth.login}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LOGIN
                </Link>
                </MenuItem>
              )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* Close Feature Flag  */}
      {/* <ScrollTop {...props} style={{ zIndex: 9999 }}>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          style={{ zIndex: 9999 }}
        >
          <KeyboardArrowUpIcon style={{ zIndex: 9999 }} />
        </Fab>
      </ScrollTop> */}
      <Modal open={open} handleClose={() => setOpen(false)}>
        <h2 id="transition-modal-title">{instruction.head}</h2>
        <p id="transition-modal-description">{instruction.no1}</p>
        <p id="transition-modal-description">
          {instruction.no2}
        </p>
        <p id="transition-modal-description">
          {instruction.no3}
        </p>
        <p id="transition-modal-description">
          {instruction.no4}
        </p>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  Logout: async (item) => {
    clearToken();
    dispatch(logoutSuccess());
  },
  changeTheme: async (e) => {
    dispatch({ type: "CHANGE_THEME", payload: e.target.checked });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
