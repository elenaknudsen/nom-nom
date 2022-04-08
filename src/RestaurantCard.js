import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import ListItemButton from '@mui/material/ListItemButton';

class RestaurantCard extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          stars: this.props.data.rating,

      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.props.goToRestaurantPage(this.props.data);
      }
    render () {
        return(<ListItemButton style={{padding: 0 }} onClick={this.handleClick}>
            <Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, padding: 10,  width: 200, height: 250, marginLeft: 25}} >
        <Paper style={{ backgroudColor: 'white', height: 160, marginBottom: 25}}></Paper>
        <div class="row">
            <div class="column" style={{float: 'left'}}>
                <Typography fontSize="16px">{this.props.data.name}</Typography>
                <Typography>{this.props.data.cuisine}</Typography>
            </div>
            <div class="column" style={{width: 2000}}>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                {this.state.stars>=2 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.state.stars>=3 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.state.stars>=4 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.state.stars>=5 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}

            </div>
        </div>
        
        </Paper>
        </ListItemButton>)
    }
}

export default RestaurantCard;