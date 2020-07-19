import React from 'react';
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
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [modalConfirm, setModalConfirm] = React.useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const submitForm = async () => {
        const res = await props.submitForm()
        closeModal()
        if (res) {
            props.history.push('/')
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
        <>
            <WithLoading loading={props.form.loading} />
            <Container>
                <Stepper activeStep={activeStep} alternativeLabel style={{ background: 'none' }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className='stepper-content'>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            {getStepsContent(activeStep)}
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
                    <h2 style={{ textAlign: 'center' }}> Confirm Application?</h2>
                    <p>The Application will send to the Advisor that you enter in the form.</p>
                    <Button variant="contained" color="primary" onClick={() => submitForm()} >Confirm</Button>
                    <Button variant="contained" onClick={() => closeModal()} style={{ marginLeft: 10 }}>Cancel</Button>
                </Modal>
            </Container>
        </>

    );
}

const mapStateToProps = (state) => {
    return { form: state.Form, cart: state.Item.Cart };
};


export default connect(mapStateToProps, { submitForm })(withRouter(Cart))