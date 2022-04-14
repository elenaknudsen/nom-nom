import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

class BottomNavbar extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this);
      this.handleHomeClick = this.handleHomeClick.bind(this);
      }

      handleClick(event) {
          this.props.onSearchClick();
      }
      handleHomeClick(event) {
          this.props.goToHomepage();
      }


    render () {
        return(<Paper style={{ borderWidthTop: '30px', borderColor: this.props.colors.NAVY_BLUE, borderStyle: 'solid', boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2)', backgroundColor: this.props.colors.CAROLINA_BLUE, width: '110%', textAlign: 'center'}} >
        <Typography style={{fontSize: '32px', color: 'white'}} m={2}>
        <IconButton onClick={this.handleHomeClick}><Icon style={{color: 'white', marginRight: 150}}><HomeIcon/></Icon></IconButton>
        <IconButton onClick={this.handleClick}><Icon style={{color: 'white'}}><SearchIcon/></Icon></IconButton>
        </Typography>
        
        </Paper>)
    }
}

export default BottomNavbar;