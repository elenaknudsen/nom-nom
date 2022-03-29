import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this);
      this.goBack = this.goBack.bind(this);
      }

      handleClick(event) {
          this.props.onSearchClick();
      }
      goBack(event) {
        console.log("asjdkf")
    }
    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, width: '110%', textAlign: 'center'}} >
        <Typography style={{fontSize: '32px', color: 'white', fontFamily: 'Pacifico'}} m={2}>
        <IconButton onClick={this.goBack}><Icon style={{color: 'white'}}><ArrowBackIcon fontSize="large"/></Icon></IconButton>
        nom nom 
        <IconButton onClick={this.handleClick}><Icon style={{color: 'white'}}><SearchIcon fontSize="large"/></Icon></IconButton>
        </Typography>
        
        </Paper>)
    }
}

export default Navbar;