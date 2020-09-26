import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 999,
    color: "#fff",
  },
}));
const WithLoading = (props) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.loading}>
      <img src={process.env.PUBLIC_URL + '/loading.svg'} alt="loading" />
    </Backdrop>
  );
};

export default WithLoading;
