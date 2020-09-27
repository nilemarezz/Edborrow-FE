import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { route } from '../systemdata/route'
class Header extends React.Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 20px', alignItems: 'center', cursor: "pointer" }} onClick={() => this.props.history.push(route.user.home)}>
            <img src={process.env.PUBLIC_URL + '/inventory.png'} alt="asd" width={50} height={50} />
            <Box display={{ xs: 'none', md: 'block' }} m={1}>
              <Typography variant="h5" gutterBottom style={{ marginLeft: 5 }}>
                Edborrow
              </Typography>
            </Box>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 20px', alignItems: 'center' }} >
            <IconButton color="inherit" onClick={() => this.props.history.push(route.user.cart)}>
              <Badge badgeContent={this.props.Item.Cart.length} color="secondary">
                <ShoppingCartIcon style={{ fontSize: 40 }} />
              </Badge>
            </IconButton>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: "pointer" }} onClick={() => this.props.history.push(route.user.profile)}>
              <PersonIcon style={{ fontSize: 40 }} />
              <Box display={{ xs: 'none', md: 'block' }} m={1}>
                <Typography variant="h6" gutterBottom >
                  {this.props.User.user}
                </Typography>
              </Box>
            </div>
          </div>
        </div>
        {/* <hr style={{ margin: '0px 20px', border: '0.3px solid lightgrey' }}></hr> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(withRouter(Header));