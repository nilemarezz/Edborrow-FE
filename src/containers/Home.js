import React from 'react';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import CachedIcon from '@material-ui/icons/Cached';
import styled from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Title from '../components/NewTitle'
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Typography from "@material-ui/core/Typography";
import { route } from '../systemdata/route'
import { withRouter } from 'react-router-dom'
const Container = styled.div`
 display: flex ; 
 flex-direction: row ; 
 flex-wrap: wrap;  
 padding-bottom: 50px; 
 padding-top : 1.5%;
 margin-left : 4%;
`
const BoxContainer = styled.div`
 background-color: ${props => props.color}; 
 border-radius: 20px;  
 margin-top: 10px; 
 margin-left : 40px;
 display: flex; 
 cursor : pointer;
 flex-direction: column; 
 justify-content: center; 
 align-items: center; 
 padding: 0px 20px;
 -webkit-box-shadow: 0 10px 6px -6px #777;
 -moz-box-shadow: 0 10px 6px -6px #777;
 box-shadow: 0 10px 6px -6px #777;
 :hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
 }
  /* @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
  } */
`

function Home(props) {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Title title="Menu" />
        <Container >
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <BoxContainer color='#3949ab' onClick={() => props.history.push(route.user.items)}>
              <PlaylistAddIcon style={{ fontSize: window.innerWidth < 600 ? 150 : 220, color: 'white' }} />
              <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
                Items
            </Typography>
            </BoxContainer>
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1500 } : {})}
          >
            <BoxContainer color='#1e88e5' onClick={() => props.history.push(route.user.applicationList)}>
              <DescriptionIcon style={{ fontSize: window.innerWidth < 600 ? 150 : 220, color: 'white' }} />
              <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
                Request
      </Typography>
            </BoxContainer>
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 2000 } : {})}
          >
            <BoxContainer color='#00acc1' onClick={() => props.history.push(route.user.myBorrow)}>
              <CachedIcon style={{ fontSize: window.innerWidth < 600 ? 150 : 220, color: 'white' }} />
              <Typography variant="h5" gutterBottom style={{ color: 'white' }} >
                On Borrow
      </Typography>
            </BoxContainer>
          </Grow>
        </Container>
        <Box display={{ xs: 'none', md: 'block' }}>
          <img src={process.env.PUBLIC_URL + '/img.svg'} alt="asd" width={400} height={400} style={{ position: 'absolute', bottom: -65, right: 50 }} />
        </Box>
      </>

    </ThemeProvider >
  );
}

export default withRouter(Home);
