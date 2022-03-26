import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        open: true,
      };
      this.handleClick = this.handleClick.bind(this);
      }
    
    
        handleClick() {
          console.info('You clicked the Chip.');
        }

    render () {
        return(<>
        <List style={{backgroundColor: this.props.colors.CAROLINA_BLUE, color: 'white', overflow: 'scroll'}}>
            <ListItem>
                <ListItemText>filters</ListItemText>
            </ListItem>

            <ListItemButton >
                <ListItemText>price</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>cheap eats</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>mid-range</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>splurge day</ListItemText>
                </ListItem>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemText>cuisine</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>american</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>japanese</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>italian</ListItemText>
                </ListItem>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemText>dietary restrictions</ListItemText>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>vegetarian</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>gluten-free</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>vegan</ListItemText>
                </ListItem>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemText>proximity</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>less than 1 mile</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>1-5 miles</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>more than 5 miles</ListItemText>
                </ListItem>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemText>predicted wait times</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>less than 10 minutes</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>10-30 minutes</ListItemText>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <Checkbox></Checkbox>
                    <ListItemText>more than 30 minutes</ListItemText>
                </ListItem>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemText>vibes</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                <ListItem sx={{ pl: 4 }}>
                    <Chip onClick={this.handleClick} variant="outlined" style={{color: this.props.colors.GREENISH}} label="asdf"/>
                    <Chip onClick={this.handleClick} variant="outlined" style={{color: this.props.colors.GREENISH}} label="asdasdfasdfaf"/>
                </ListItem>
                </List>
            </Collapse>

            <ListItem>
                <Button variant="contained" style={{backgroundColor: this.props.colors.GREENISH}}>clear all filters</Button>
            </ListItem>
        </List>
        </>)
    }
}

export default SearchFilters;