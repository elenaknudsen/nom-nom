import React from 'react';
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import Review from './Review';

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          key: Object.keys(this.props.data.reviews),
          stars: this.props.data.rating,
          selectValue: 10

      };
      this.handleClick = this.handleClick.bind(this)
      this.generateVibes = this.generateVibes.bind(this)
      this.chipClick = this.chipClick.bind(this)
      this.generateReviews = this.generateReviews.bind(this)
      this.handleChange = this.handleChange.bind(this)
      }

      handleClick(event) {
          this.props.goToReviewPage(this.props.data);
      }
      generateVibes(title) {
          return(<Chip style={{color: 'white', backgroundColor: this.props.colors.GOLDENISH}} label={title}/>)
      }
      chipClick(event){
          let link = event.target.textContent;
          if(link==='website') {
              window.open(this.props.data.website)
          } else {
              window.open(this.props.data.directions)
          }
      }
      generateReviews(element) {
            let content = this.props.data.reviews[element].comment;
            let stars = this.props.data.reviews[element].stars;
        return(<Review title={element} content={content} colors={this.props.colors} stars={stars}></Review>)
      }
      handleChange(event) {
          this.setState({
              selectValue: event.target.value
          })
      }
    render () {
        return(<>
        <Paper style={{width: 300, backgroundColor: this.props.colors.CAROLINA_BLUE, margin: 25, padding: 20, overflow: 'scroll'}}>
        <img alt={this.props.data.name} src={this.props.data.image} style={{width: 300, height: 200}}></img>
        <Typography fontSize="32px" style={{ marginTop: 20, fontWeight: 'bold', color: 'white' }}>{this.props.data.name}</Typography>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
            <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon>
                {this.state.stars>=2 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=3 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=4 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=5 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
            </div>
            <Typography fontSize="24px" style={{ marginLeft: 30, marginTop: 10, color: 'white' }}>{this.props.data.price}</Typography>

        </div>
        <Typography style={{color: 'white', marginTop: 10}}fontSize="14px">{this.props.data.hours}</Typography>
        <Typography style={{color: 'white', marginTop: 10}}fontSize="14px">{this.props.data.sitTime} wait</Typography>
        <div style={{marginTop: 10}}>
        {this.props.data.cuisine.map(element => <Typography fontSize="14px" style={{ display: "grid", gridColumn: "4/5", color: 'white' }}>{element}</Typography> )}
        </div>
        <div style={{marginTop: 10}}>
        {this.props.data.dietRange.map(element => <Typography fontSize="14px" style={{ display: "grid", gridColumn: "4/5", color: 'white' }}>{element}</Typography> )}
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <Chip onClick={this.chipClick} style={{color: 'white', backgroundColor: this.props.colors.GREENISH}} label="website"/>
        <Chip onClick={this.chipClick} style={{color: 'white', backgroundColor: this.props.colors.GREENISH}} label="directions"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <Typography style={{color: 'white'}} fontSize="32px">vibes:</Typography>
        </div>
        <div style={{marginTop: 10}}>
        {this.props.data.vibes.map(element => this.generateVibes(element))}
        </div>
        <Button variant="contained" style={{backgroundColor: this.props.colors.GREENISH}} onClick={this.handleClick}>leave a review</Button>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <Typography fontSize="32px" style={{marginTop: 15, color: 'white'}}>reviews:</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', overflow: 'scroll', gap: 10}}>
            {this.state.key.length==0 ? <Typography fontSize="16px" style={{marginTop: 15, marginLeft: 5, color: 'white'}}>no reviews yet</Typography> : <></>}
            {this.state.key.map(element => this.generateReviews(element))}
        </div>

        </Paper>
        </>)
    }
}

export default RestaurantPage;