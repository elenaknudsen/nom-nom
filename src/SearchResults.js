import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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