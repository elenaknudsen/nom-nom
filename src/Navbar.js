import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.props.onSearchClick();
      }
    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, width: '110%', textAlign: 'center'}} >
        <Typography style={{fontSize: '32px', color: 'white'}} m={2}>nom nom 
        <IconButton onClick={this.handleClick}><Icon style={{color: 'white'}}><SearchIcon fontSize="large"/></Icon></IconButton>
        </Typography>
        
        </Paper>)
    }
}

export default Navbar;