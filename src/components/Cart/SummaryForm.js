import React from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import SummaryItemTable from './SummaryItemTable'
import { RefactorDateJS } from '../../utilities/data/RefactorDateJS'

const StyledPaper = styled(Paper)`
    margin-top:10px;
`
const Container = styled.div`
  padding : 30px;
`
const ContentContainer = styled.div`
  margin-top: 20px;
`
const FormContent = styled(Grid)`
  margin-top : 10px;
`

class SummaryForm extends React.Component {

  render() {
    const { form, cart } = this.props
    return (
      <StyledPaper>
        <Container>
          <Typography variant="h5" component="h2">
            Summary Form
            </Typography>
          <ContentContainer >
            <Typography variant="h6" component="h6">
              Information :
            </Typography>
            <FormContent container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField id="id" label="ID" value={form.id} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="name" label="Name - Surname" value={`${form.name} ${form.surname}`} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="email" label="Email" value={form.email} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="phone" label="Telephone No." value={form.telNo} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="advisor" label="Advisor" value={form.advisor} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="purpose" label="Purpose" variant="outlined" value={form.purpose} fullWidth rows={4} multiline disabled />
              </Grid>
            </FormContent>
          </ContentContainer>
          <Typography variant="h6" component="h6">
            Borrow {"&"} Return Date :
            </Typography>
          <FormContent container spacing={3}>
            <Grid item xs={12} sm={5}>
              <TextField id="borrow date" label="Borrow Date" value={RefactorDateJS(form.borrowDate)} fullWidth disabled />
            </Grid>
            <span style={{ marginTop: 20 }}> <strong> _ </strong></span>
            <Grid item xs={12} sm={5}>
              <TextField id="return date" label="Return Date" value={RefactorDateJS(form.returnDate)} fullWidth disabled />
            </Grid>
          </FormContent>

          <Typography variant="h6" component="h6" style={{ marginTop: 30 }}>
            Items :
            </Typography>
          <SummaryItemTable cart={cart} />
        </Container>
      </StyledPaper>
    )
  }
}

export default SummaryForm 