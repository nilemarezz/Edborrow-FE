import React from 'react'
import GetMyBorrow from '../../services/ItemService/GetMyBorrow'
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { renderImage } from '../../utilities/getImage'
import styled from "styled-components";
import { color } from '../../utilities/data/color'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { RefactorDate } from '../../utilities/data/refactorDate'
import { renderDepartment } from '../../utilities/Table/renderItemTable'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import WithLoading from '../../utilities/WithLoading'
const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {  //This can be referred from Material UI API documentation. 
        padding: '4px 8px',
        margin: '20px'
      },
    },
  },
});
const ModalDiv = styled.div`
  ${(props) => props.isLoading &&
    `
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  `}
  margin : 0px 20px;
`
const HelpBox = styled.div`

  float : right;
  display: flex ;  
  flex-direction: row;
  line-height: 1px;
`
const HelpContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  padding: 0px 10px;
  margin-top : 20px;
`
const Status = styled.div`
  border-radius: 50%;
  width: 8px; 
  height: 8px;
  background-color: ${props => props.color};
`
const Text = styled(Typography)`
  color : ${props => props.darkmode ? "white" : "black"};
`
class MyBorrowTable extends React.Component {
  state = { items: [], loading: false }
  getMyBorrowItems = async () => {
    const data = await GetMyBorrow()
    return data
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const data = await this.getMyBorrowItems()
    if (data === false) {
      this.setState({ loading: false })
    } else {
      data.sort((a, b) => (a.returnDate > b.returnDate) ? 1 : -1)
      this.setState({ items: data, loading: false })
    }
  }
  checkStatus = (value) => {
    if (value === 1) {
      return color.green
    } else if (value === 3) {
      return color.red
    } else {
      return color.darkgrey
    }
  }
  render() {

    if (this.state.items.length === 0) {
      return (
        <ModalDiv isLoading={true}>
          {this.state.loading ? <WithLoading loading={true} /> :
            <Typography variant="h3" component="h3" gutterBo0om style={{ marginTop: 29, color: 'grey' }}>
              No Item In Borrow
      </Typography>}
        </ModalDiv>
      )
    } else {
      return (

        <ModalDiv >
          <HelpBox darkmode={this.props.darkmode}>
            <HelpContainer >
              <Status color={color.darkgrey}></Status>
              <Typography variant="body1" component="h2" gutterBo0om style={{ marginLeft: 10 }}>
                Not pickup yet
      </Typography>
            </HelpContainer>
            <HelpContainer >
              <Status color={color.green}></Status>
              <Typography variant="body1" component="h2" gutterBo0om style={{ marginLeft: 10 }}>
                On Borrow
      </Typography>
            </HelpContainer>
            <HelpContainer >
              <Status color={color.red}></Status>
              <Typography variant="body1" component="h2" gutterBo0om style={{ marginLeft: 10 }}>
                Late
      </Typography>
            </HelpContainer>
          </HelpBox>
          <ThemeProvider theme={theme}>
            <TableContainer style={{ height: 600 }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell padding='default'></TableCell>
                    <TableCell padding='default'>
                      <Text darkmode={this.props.web.darkmode}>Name</Text>
                    </TableCell>
                    <TableCell padding='default'><Text darkmode={this.props.web.darkmode}>Image</Text></TableCell>
                    <TableCell padding='default'><Text darkmode={this.props.web.darkmode}>Owner</Text></TableCell>
                    <TableCell padding='default'><Text darkmode={this.props.web.darkmode}>Return date</Text></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.items.map((row) => (
                    <TableRow key={row.itemId}>
                      <TableCell><Status color={this.checkStatus(row.itemBorrowingStatusId)} /></TableCell>
                      <TableCell><Text darkmode={this.props.web.darkmode}>{row.itemName}</Text></TableCell>
                      <TableCell><img src={renderImage(row.itemImage)} alt={row.itemName} width={50} height={50} /></TableCell>
                      <TableCell><Text darkmode={this.props.web.darkmode}>{row.Owner}</Text></TableCell>
                      <TableCell><Text darkmode={this.props.web.darkmode}>{RefactorDate(row.returnDate)}</Text></TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ThemeProvider>
        </ModalDiv>

      )
    }

  }
}

const mapStateToProps = (state) => {
  return { web: state.WEB_CONFIG };
};
export default connect(mapStateToProps,)(withRouter(MyBorrowTable));