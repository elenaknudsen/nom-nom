import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

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
        return(<Paper style={{ borderWidthBottom: '30px', borderStyle: 'solid', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: this.props.colors.CAROLINA_BLUE, width: '110%', textAlign: 'center'}} >
        <Typography style={{fontSize: '32px', color: 'white'}} m={1}>
        {this.props.prevPage.length!==0 && this.props.currentPage!=='newReview' ? <IconButton onClick={this.handleBack}><Icon style={{color: 'white'}}><ArrowBackIcon/></Icon></IconButton> : <></>}
        {this.props.currentPage==='searchFilters' ? <FormControl variant="outlined"><OutlinedInput style={{backgroundColor: 'white'}} /></FormControl>: <>nom nom</>}
        {this.props.currentPage!=='searchFilters' ? <IconButton onClick={this.handleClick}><Icon style={{color: 'white'}}><SearchIcon/></Icon></IconButton> : <></>}
        </Typography>
        
        </Paper>)
    }
}

export default Navbar;