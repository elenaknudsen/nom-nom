import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this);
      this.handleBack = this.handleBack.bind(this);
      }

      handleClick(event) {
          this.props.onSearchClick();
      }
      handleBack(event) {
          this.props.onBackButton();
      }

    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, width: '110%', textAlign: 'center'}} >
        <Typography style={{fontSize: '32px', color: 'white'}} m={2}>
        {this.props.prevPage.length!==0 ? <IconButton onClick={this.handleBack}><Icon style={{color: 'white'}}><ArrowBackIcon/></Icon></IconButton> : <></>}
        {this.props.currentPage==='searchFilters' ? <TextField></TextField> : <>nom nom</>}
        {this.props.currentPage!=='searchFilters' ? <IconButton onClick={this.handleClick}><Icon style={{color: 'white'}}><SearchIcon/></Icon></IconButton> : <></>}
        </Typography>
        
        </Paper>)
    }
}

export default Navbar;