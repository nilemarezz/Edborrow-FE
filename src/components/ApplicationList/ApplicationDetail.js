import React from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import ApplicationDetailTable from './ApplicationDetailTable'
import { RefactorDate } from '../../utilities/data/refactorDate'

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

class ApplicationDetail extends React.Component {

  render() {
    return (
      < StyledPaper >
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
                <TextField id="id" label="ID" value={'asd'} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="name" label="Name - Surname" value={"Matas Paosriwong"} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="email" label="Email" value={"nilenon@gmail.com"} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="phone" label="Telephone No." value={"0940035373"} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="advisor" label="Aadvisor" value={"DR. Olarn"} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="create" label="Create Date" value={"DR. Olarn"} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="purpose" label="Purpose" variant="outlined" value={"For Activity and education in wip camp 12"} fullWidth rows={4} multiline disabled />
              </Grid>
            </FormContent>


          </ContentContainer>
          <Typography variant="h6" component="h6" style={{ marginTop: 10 }}>
            Borrow {"&"} Return Date :
          </Typography>
          <FormContent container spacing={3}>
            <Grid item xs={12} sm={5}>
              <TextField id="borrow date" label="Borrow Date" fullWidth disabled />
            </Grid>
            <span style={{ marginTop: 20 }}> <strong> _ </strong></span>
            <Grid item xs={12} sm={5}>
              <TextField id="return date" label="Return Date" fullWidth disabled />
            </Grid>
          </FormContent>

          <Typography variant="h6" component="h6" style={{ marginTop: 30 }}>
            Advisor Reject Purpose : -
          </Typography>

          <Typography variant="h6" component="h6" style={{ marginTop: 30 }}>
            Items :
          </Typography>
          <ApplicationDetailTable itemList={this.props.detail} />
        </Container>
      </ StyledPaper>
    )
  }
}

export default ApplicationDetail