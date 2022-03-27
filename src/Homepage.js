import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import StarHalf from '@mui/icons-material/StarHalf';


import RestaurantCard from './RestaurantCard.js';


class HomePage extends React.Component {
    render () {
        return(<>
            
        <div style={{  overflowY: 'scroll'}}>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>cheap eats</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll'}}> 
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>

            </div>
        </div>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%'}}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>chapel hill classics</Typography>
            <div style={{ display: 'flex', flexDirection: 'row',  }}> 
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
            </div>
        </div>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>fast</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 100}}> 
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
                <RestaurantCard colors={this.props.colors}/>
            </div>
        </div>
        </div>
        </>)
    }
}

export default HomePage;