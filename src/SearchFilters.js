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
      }
    
    
    handleClick(event) {
        this.setState({
            clearFilters: true
        })
    }

    render () {
        return(<div style={{width: window.innerWidth, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowY: 'scroll'}}>
        <List style={{backgroundColor: this.props.colors.CAROLINA_BLUE, color: 'white', overflow: 'scroll', margin: 20, paddingTop: 0, width: 300 }}>
            <ListItem style={{backgroundColor: this.props.colors.GREENISH, padding: 20}}>
                <ListItemText  primaryTypographyProps={{fontSize: '24px'}} >filters</ListItemText>
            </ListItem>
            <CollapseElement title={'price'} options={['cheap eats', 'mid-range', 'splurge day']}/>
            <CollapseElement title={'cuisine'} options={['american', 'italian', 'japanese', 'indian', 'mexican']}/>
            <CollapseElement title={'dietary restrictions'} options={['vegetarian', 'vegan', 'gluten-free']}/>
            <CollapseElement title={'proximity'} options={['< .5 miles', '< 1 mile', '< 5 miles']}/>
            <CollapseElement title={'predicted wait times'} options={['< 5 minutes', '< 10 minutes', '< 30 minutes']}/>
            <CollapseElement colors={this.props.colors} title={'vibes'} options={['#studyvibes', '#datenight', '#quirky', '#sporty', '#loud']}/>
            <ListItem style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Button variant="contained" onClick={this.handleClick} style={{backgroundColor: this.props.colors.GREENISH}}>clear all filters</Button>
            </ListItem>
        </List>
        </div>)
    }
}

export default SearchFilters;