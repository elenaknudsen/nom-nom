import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Result from './Result.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.props.goToRestaurantPage();
          console.log("ASJDHAJHA")
      }
    render () {
        return(<>
            <List style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'scroll', paddingTop: 200, margin: 20, padding: 1025, pointerEvents: 'fill'}}>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 100, marginLeft: 20}}>
                <Typography style={{color: 'white', fontSize: '24px'}}>X results found</Typography>
                <FormControl style={{width: 200, borderColor: 'white'}}>
                    <InputLabel style={{color: 'white'}}>filter by</InputLabel>
                    <Select style={{borderColor: 'white', color: 'white'}}>
                    <MenuItem value={10}>top rated</MenuItem>
                    <MenuItem value={20}>$-$$$</MenuItem>
                    <MenuItem value={30}>$$$-$</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton onClick={this.handleClick} style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
            </List>
        </>)
    }
}

export default SearchResults;