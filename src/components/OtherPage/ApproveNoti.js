import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
import AdvisorRejectPurpose from '../../services/ApplicationService/AdvisorRejectPurpose'
import { route } from '../../systemdata/route'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Sign from '../../components/sign/Sign'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const Success = (props) => {
  const classes = useStyles();
  const [reject, setReject] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState("default");

  const renderButton = () => {
    if (loading === "default") {
      return (
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          style={{ marginTop: 10, marginLeft: 5 }}
        >
          Send
        </Button>
      );
    } else if (loading === "loading") {
      return <CircularProgress color="secondary" size={20} />;
    } else {
      return;
    }
  };
  const sendForm = async (e) => {
    e.preventDefault();
    setLoading("loading");
    const res = await AdvisorRejectPurpose(
      reject,
      props.location.search.substring(11),
      null,
      "advisor"
    );
    if (res) {
      setSuccess(true);
      setLoading("none");
    } else {
      setSuccess(false);
      setLoading("default");
    }
  };
  if (props.match.params.type === "success") {
    return (
      <div>
        <Backdrop className={classes.backdrop} open={true}>
          <Paper style={{ padding: 20 }}>
            <center>
              <Sign type="success" />
              <Typography variant="h5" component="h5" gutterBottom>
                You Approve this request
      </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.history.push(route.home)}
                style={{ marginTop: 10 }}
              >
                Home
              </Button>
            </center>
          </Paper>
        </Backdrop>
      </div>
    );
  } else if (props.match.params.type === "already") {
    return (
      <div>
        <Backdrop className={classes.backdrop} open={true}>
          <Paper style={{ padding: 20 }}>
            <center>
              <Sign type="already" />
              <Typography variant="h5" component="h5" gutterBottom>
                You Already Approve this Request
      </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.history.push(route.home)}
                style={{ marginTop: 10 }}
              >
                Home
              </Button>
            </center>
          </Paper>
        </Backdrop>
      </div>
    );
  } else if (props.match.params.type === "expire") {
    return (
      <div>
        <Backdrop className={classes.backdrop} open={true}>
          <Paper style={{ padding: 20 }}>
            <center>
              <QueryBuilderIcon
                style={{ width: "50%", height: "50%", color: "grey" }}
              />
              <Typography variant="h5" component="h5" gutterBottom>
                This Request was Expried
      </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => props.history.push(route.home)}
                style={{ marginTop: 10 }}
              >
                Home
              </Button>
            </center>
          </Paper>
        </Backdrop>
      </div>
    )
  } else {
    return (
      <div>
        <Backdrop className={classes.backdrop} open={true}>
          <Paper style={{ padding: 20 }}>
            <center>
              <Sign type="fail" />
              <Typography variant="h5" component="h5" gutterBottom>
                You not approve this request
      </Typography>

              <form onSubmit={(e) => sendForm(e)}>
                {success ? (
                  <p style={{ color: "green" }}>Send Reject Purpose Success</p>
                ) : (
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows="3"
                      placeholder="Enter your purpose , Exit for don't comment"
                      variant="outlined"
                      style={{ width: "100%" }}
                      onChange={(e) => setReject(e.target.value)}
                    />
                  )}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => props.history.push(route.home)}
                  style={{ marginTop: 10 }}

                >
                  Home
                </Button>
                {renderButton()}
              </form>
            </center>
          </Paper>
        </Backdrop>
      </div>
    );
  }
};


export default withRouter(Success)
