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
            <Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, padding: 10,  width: 210, height: 300, marginLeft: 25}} >
            <img alt={this.props.data.name} src={this.props.data.image} style={{width: 210, height: 160}}></img>
            <Typography style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}} fontSize="20px">{this.props.data.name}</Typography>

        <div class="row">
        <div style={{textAlign: 'center'}}>
                <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><Star/></Icon>
                {this.state.stars>=2 ? <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><Star/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><StarOutline/></Icon>}
                {this.state.stars>=3 ? <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><Star/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><StarOutline/></Icon>}
                {this.state.stars>=4 ? <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><Star/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><StarOutline/></Icon>}
                {this.state.stars>=5 ? <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><Star/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, transform: 'scale(.75)'}}><StarOutline/></Icon>}

            </div>
            <div>
                {this.props.data.cuisine.map(element => <Typography style={{ textAlign: 'center', color: 'white'}} fontSize="14px" >{element}</Typography> )}
            </div>
        </div>
        
        </Paper>
        </ListItemButton>)
    }
}

export default RestaurantCard;