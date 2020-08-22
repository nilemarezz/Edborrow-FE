import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import AdvisorInput from './AdvisorInput'
import DatePicker from './DatePicker'
import { connect } from "react-redux";
import {
  setFormID, setFormName, setFormSurname,
  setFormAdvisor, setFormBorrowDate, setFormEmail,
  setFormPurpose, setFormReturnDate, setFormTelNo,
  setFormUsePlace
} from '../../actions/ApplicationFormAction'
import DebounceForm from '../../utilities/DebounceForm'
const Container = styled.div`
  padding : 30px;
`
const ItemContainer = styled(Grid)`
  margin-top:10px;
`
const StyledPaper = styled(Paper)`
  margin-top:10px;
`

class ApplicationForm extends React.Component {

  render() {
    const { id, name, surname, email, telNo, advisor, borrowDate, returnDate, purpose, usePlace } = this.props.form
    const { setId, setName, setSurname, setEmail, setTelNo, setBorrowDate, setReturnDate, setAdvisor, setPurpose, setusePlace } = this.props
    return (
      <StyledPaper elevation={3} >
        <Container>
          <Typography variant="h5" component="h2">
            Application Form
            </Typography>
          <ItemContainer container spacing={2}>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="ID" placeholder="Enter Your ID" value={id} setText={setId} disabled={true} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="Name" placeholder="Enter your Name" value={name} setText={setName} disabled={true} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="Surname" placeholder="Enter your Surname" value={surname} setText={setSurname} disabled={true} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="Email" placeholder="Enter your Email" type="email" value={email} setText={setEmail} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="Telephone No." placeholder="Enter your Tel.No" value={telNo} setText={setTelNo} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <AdvisorInput value={advisor} setAdvisor={setAdvisor} />
            </Grid>

            <Grid item sm={4} xs={12}>
              {<DatePicker label="Borrow Date" value={borrowDate} setTime={setBorrowDate} />}
            </Grid>
            <span style={{ marginTop: 20 }}>-</span>
            <Grid item sm={4} xs={12}>
              {<DatePicker label="Return Date" value={returnDate} setTime={setReturnDate} />}
            </Grid>
            <Grid item sm={8} xs={12}>
              <DebounceForm label="Purpose" placeholder="Enter your Purpose" value={purpose} setText={setPurpose} rows={4} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <DebounceForm label="Use Place" placeholder="Enter place where to use" value={usePlace} setText={setusePlace} />
            </Grid>
          </ItemContainer>
        </Container>
      </StyledPaper>

    )
  }
}

const mapStateToProps = (state) => {
  return { form: state.Form };
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setId: async (value) => {
    dispatch(setFormID(value));
  },
  setName: async (value) => {
    dispatch(setFormName(value));
  },
  setSurname: async (value) => {
    dispatch(setFormSurname(value));
  },
  setAdvisor: async (value) => {
    dispatch(setFormAdvisor(value));
  },
  setBorrowDate: async (value) => {
    dispatch(setFormBorrowDate(value));
  },
  setEmail: async (value) => {
    dispatch(setFormEmail(value));
  },
  setPurpose: async (value) => {
    dispatch(setFormPurpose(value));
  },
  setReturnDate: async (value) => {
    dispatch(setFormReturnDate(value));
  },
  setTelNo: async (value) => {
    dispatch(setFormTelNo(value));
  },
  setusePlace: async (value) => {
    dispatch(setFormUsePlace(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)