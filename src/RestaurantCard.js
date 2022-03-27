import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import StarHalf from '@mui/icons-material/StarHalf';
import Button from '@mui/material/Button';

class RestaurantCard extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.props.goToRestaurantPage();
      }
    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.GREENISH, padding: 10,  width: 200, height: 250, marginLeft: 25}} >
        <Paper style={{ backgroudColor: 'white', height: 160, marginBottom: 25}}></Paper>
        <div class="row">
            <div class="column" style={{float: 'left'}}>
                <Button size="small" style={{padding: '0px', fontSize: '12px', color: this.props.colors.NAVY_BLUE}} onClick={this.handleClick}>restaurant</Button>
                <Typography>cuisine</Typography>
            </div>
            <div class="column" style={{width: 2000}}>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarHalf fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
            
            </div>
        </div>
        
        </Paper>)
    }
}

export default RestaurantCard;