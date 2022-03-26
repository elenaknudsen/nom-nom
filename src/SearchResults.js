import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Result from './Result.js';

class SearchResults extends React.Component {
    render () {
        return(<>
            <List style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'scroll', paddingTop: 200, margin: 20}}>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
                <ListItemButton style={{padding: 0}}>
                <Result colors={this.props.colors}>asdfa</Result>
                </ListItemButton>
            </List>
        </>)
    }
}

export default SearchResults;