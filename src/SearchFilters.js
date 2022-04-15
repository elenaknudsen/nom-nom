import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import CollapseElement from './CollapseElement';

class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          clearFilters: null,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      }
    
    
    handleClick(event) {
        this.setState({
            clearFilters: true
        })
    }

    handleSearch(event) {
       this.props.goToSearchResults();
    }

    render () {
        return(<div style={{width: window.innerWidth, height: window.innerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowY: 'scroll'}}>
        <List style={{backgroundColor: this.props.colors.CAROLINA_BLUE, color: 'white', overflow: 'scroll', margin: 20, paddingTop: 0, width: 300 }}>
            <ListItem style={{backgroundColor: this.props.colors.ACCENT, padding: 20}}>
                <ListItemText  primaryTypographyProps={{fontSize: '24px'}} >filters</ListItemText>
            </ListItem>
            <CollapseElement title={'price'} options={['cheap eats ($)', 'mid-range ($$)', 'high-end ($$$)']}/>
            <CollapseElement title={'cuisine'} options={["African", "American", "Asian", "Bar", "Barbecue", "Boba", "Cafe", 
                                                            "Cantonese", "Chinese", "Contemporary", "Coffee", "Deli", "Diner",
                                                            "Fast Food", "French", "Fusion", "Greek", "Grill", "Healthy", "Himalayan",
                                                            "Indian", "International", "Italian", "Japanese", "Korean", "Latin",
                                                            "Mediterranean", "Mexican", "Middle Eastern", "Pizza", "Pub", "Seafood",
                                                            "Smoothie", "Spanish", "Sushi", "Sweets", "Thai", "Vietnamese", "Wine Bar"]}/>
            <CollapseElement title={'dietary restrictions'} options={['vegetarian', 'vegan', 'gluten-free']}/>
            <CollapseElement title={'proximity'} options={['within .5 miles', 'within 1 mile', 'within 5 miles']}/>
            <CollapseElement title={'predicted wait times'} options={['fewer than 5 minutes', 'fewer than 10 minutes', 'fewer than 30 minutes']}/>
            <CollapseElement colors={this.props.colors} title={'vibes'} options={['#study-vibes', '#quirky', '#loud', '#quiet', '#date-night', '#bar', '#parent-approved', '#bargain', '#fancy', '#dive', '#game-night']}/>
            <ListItem style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Button variant="contained" onClick={this.handleClick} style={{backgroundColor: this.props.colors.ACCENT}}>clear all filters</Button>
                <Button variant="contained" onClick={this.handleSearch} style={{backgroundColor: this.props.colors.ACCENT}}>search</Button>
            </ListItem>
        </List>
        </div>)
    }
}

export default SearchFilters;