import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import getSteps from '../components/Cart/getStepperHeader'
import getStepsContent from '../components/Cart/getStepperContent'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 50px;
`
const Container = styled.div`
    width: 100%;
`
const BackButton = styled(Button)`
    margin-right : 10px;
`

export default function Cart() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Container>
            <Stepper activeStep={activeStep} alternativeLabel>
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
                <div>
                    <BackButton
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
              </BackButton>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </ButtonContainer>
        </Container>


    );
}