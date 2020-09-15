import React from 'react'
import GetMyBorrow from '../../services/ItemService/GetMyBorrow'
import CircularProgress from '@material-ui/core/CircularProgress';
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
const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {  //This can be referred from Material UI API documentation. 
        padding: '4px 8px',
      },
    },
  },
});
const ModalDiv = styled.div`
  width : 1200px;
  height : 700px;
  ${(props) => props.isLoading &&
    `
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  `}
`
const HelpBox = styled.div`
  border: 1px solid black ;  
  float: right; 
  display: flex ;  
  flex-direction: column;
  line-height: 0.2px;
`
const HelpContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  padding: 0px 10px;
`
const Status = styled.div`
  border-radius: 50%;
  width: 8px; 
  height: 8px;
  background-color: ${props => props.color};
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
          {this.state.loading ? <CircularProgress color="secondary" /> : <h2 style={{ fontSize: 40, color: 'lightgrey' }}>No Item Found</h2>}
        </ModalDiv>
      )
    } else {
      return (
        <ModalDiv >
          <HelpBox>
            <HelpContainer >
              <Status color={color.darkgrey}></Status>
              <p style={{ marginLeft: 10 }}>Not Pickup yet</p>
            </HelpContainer>
            <HelpContainer >
              <Status color={color.green}></Status>
              <p style={{ marginLeft: 10 }}>On Borrow</p>
            </HelpContainer>
            <HelpContainer >
              <Status color={color.red}></Status>
              <p style={{ marginLeft: 10 }}>Late</p>
            </HelpContainer>
          </HelpBox>
          <ThemeProvider theme={theme}>
            <TableContainer style={{ height: 600 }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell padding='default'></TableCell>
                    <TableCell padding='default'>Name</TableCell>
                    <TableCell padding='default'>Image</TableCell>
                    <TableCell padding='default'>Owner</TableCell>
                    <TableCell padding='default'>Return date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.items.map((row) => (
                    <TableRow key={row.itemId}>
                      <TableCell><Status color={this.checkStatus(row.itemBorrowingStatusId)} /></TableCell>
                      <TableCell>{row.itemName}</TableCell>
                      <TableCell><img src={renderImage(row.itemImage)} alt={row.itemName} width={50} height={50} /></TableCell>
                      <TableCell>{row.Owner}</TableCell>
                      <TableCell>{RefactorDate(row.returnDate)}</TableCell>

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

export default MyBorrowTable