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
        <Typography fontSize="32px" style={{ marginTop: 20 }}>{this.props.data.name}</Typography>
        <div style={{padding: 10, display: 'flex', flexDirection: 'row' }}>
        <Typography fontSize="24px" style={{  marginTop: 10 }}>{this.props.data.price}</Typography>
            <div style={{marginLeft: 30, width: '80%'}}>
            <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon>
                {this.state.stars>=2 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=3 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=4 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
                {this.state.stars>=5 ? <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><Star fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding: 10}}><StarOutline fontSize="large"/></Icon>}
            </div>
        </div>
        <Typography fontSize="14px" style={{ marginLeft: 10 }}>{this.props.data.hours}</Typography>
        <Typography fontSize="14px" style={{ marginLeft: 10}}>{this.props.data.sitTime} wait</Typography>
        <div style={{ marginLeft: 10 }}>
        {this.props.data.cuisine.map(element => <Typography fontSize="14px" style={{ display: "grid", gridColumn: "4/5" }}>{element}</Typography> )}
        {this.props.data.dietRange.map(element => <Typography fontSize="14px" style={{ display: "grid", gridColumn: "4/5" }}>{element}</Typography> )}
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Chip onClick={this.chipClick} style={{color: 'white'}} label="website"/>
        <Chip onClick={this.chipClick} style={{color: 'white'}} label="directions"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="32px">vibes:</Typography>
        </div>
        <div style={{ margin: 10}}>
        {this.props.data.vibes.map(element => this.generateVibes(element))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <List>
            <ListItem>
                <Button variant="contained" style={{backgroundColor: this.props.colors.GREENISH}} onClick={this.handleClick}>leave a review</Button>
            </ListItem>
        </List>
        
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="16px" style={{marginTop: 15}}>reviews:</Typography>
        <FormControl style={{width: 200, marginLeft: 20}}>
        <InputLabel>sort by</InputLabel>
        <Select
        label="sort by"
        value={this.state.selectValue}
        onChange={this.handleChange}>
          <MenuItem value={10}>upvotes</MenuItem>
          <MenuItem value={20}>recent</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', margin: 10, overflow: 'scroll', gap: 10}}>
            {this.state.key.map(element => this.generateReviews(element))}
        </div>

        </Paper>
        </>)
    }
}

export default RestaurantPage;