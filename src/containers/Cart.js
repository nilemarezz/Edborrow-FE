import React, { useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import getSteps from '../components/Cart/getStepperHeader'
import getStepsContent from '../components/Cart/getStepperContent'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isCompletedForm } from '../utilities/check/isCompletedForm'
import Modal from '../components/Modal'
import { submitForm } from '../thunk/Form/SubmitForm'
import WithLoading from "../utilities/WithLoading";
import { withRouter } from 'react-router-dom'
import { useSnackbar } from "notistack";
import UserDetailService from '../services/UserService/UserDetail'
import { getToken } from '../utilities/check/checkToken'
import { setFormID, setFormSurname, setFormName, setFormEmail } from '../actions/ApplicationFormAction'
import Typography from '@material-ui/core/Typography';
import { AddItemToCart } from '../thunk/Item/AddItemToCart'
import socketIOClient from "socket.io-client";
import config from '../env'
import { updateDate, updateAmount } from '../actions/SocketAction'
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 50px;
    padding-top:50px;
`
const Container = styled.div`
    width: 100%;
`
const BackButton = styled(Button)`
    margin-right : 10px;
`

const Cart = (props) => {
  const [cart, setCart] = React.useState(props.cart)
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [modalConfirm, setModalConfirm] = React.useState(false)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getUserData = async () => {
    const userData = await UserDetailService(getToken())
    props.setId(userData.data.userId)
    props.setName(userData.data.firstName)
    props.setSurname(userData.data.lastName)
    props.setEmail(userData.data.email)
  }

  useEffect(() => {
    const socket = socketIOClient(config.socket);
    socket.on("dateUpdate", data => {
      props.getUnavaliableDate(props.cart)
    });
    if (getToken()) {
      getUserData()
      props.getUnavaliableDate(props.cart)
    }
  }, [])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitForm = async () => {
    const res = await props.submit(props.form, props.cart)
    console.log(props.form, props.cart)
    closeModal()
    if (res) {
      props.history.push('/user/applicationList')
      enqueueSnackbar("Submit Form Success", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Submit Form fail, Please Try again", {
        variant: "error",
      });
    }
  }

  const openModal = () => {
    setModalConfirm(true)
  }
  const closeModal = () => {
    setModalConfirm(false)
  }
  return (
    <div>
      <WithLoading loading={props.form.loading} />

      <Container>

        {/* <Title title="Cart" /> */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 120px' }}>
          <Typography variant="h4" gutterBottom style={{ borderLeft: '3px solid #3f50b5' }}>
            <span style={{ marginLeft: 10 }}> Cart</span>
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel style={{ background: 'none' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className='stepper-content'>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              {getStepsContent(activeStep, props.cart, props.form)}
            </Grid>
            <Grid item xs={1} />

          </Grid>
        </div>
        <ButtonContainer>
          <div style={{ paddingBottom: 10 }}>
            <BackButton
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
              </BackButton>
            <Button variant="contained" color="primary" onClick={() => activeStep === 2 ? openModal() : handleNext()} disabled={!isCompletedForm(activeStep, props.form, props.cart)}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </ButtonContainer>
        <Modal open={modalConfirm} >
          <Typography variant="h4" component="h4" gutterBottom>
            Confirm Sending ?
      </Typography>
          <p>The Application will send to the Advisor that you enter in the form.</p>
          <Button variant="contained" color="primary" onClick={() => submitForm()} style={{ marginTop: 20 }} >Confirm</Button>
          <Button variant="contained" onClick={() => closeModal()} style={{ marginLeft: 10, marginTop: 20 }}>Cancel</Button>
        </Modal>
      </Container>
    </div>

  );
}

const mapStateToProps = (state) => {
  return { form: state.Form, cart: state.Item.Cart };
};
export const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: async (form, cart) => dispatch(submitForm(form, cart)),
  setId: async (value) => {
    dispatch(setFormID(value));
  },
  setName: async (value) => {
    dispatch(setFormName(value));
  },
  setSurname: async (value) => {
    dispatch(setFormSurname(value));
  },
  setEmail: async (value) => {
    dispatch(setFormEmail(value));
  },
  getUnavaliableDate: async (value) => {
    dispatch(AddItemToCart(value))
  },
  updateDate: async (value) => {
    dispatch(updateDate(value))
  },
  updateAmount: async (value) => {
    dispatch(updateAmount(value))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))