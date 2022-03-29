import React from 'react';
import Typography from '@mui/material/Typography';


import RestaurantCard from './RestaurantCard.js';


class HomePage extends React.Component {
    render () {
        return(<>
            
        <div style={{  overflowY: 'scroll', overflowX: 'hidden'}}>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
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
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll'}}> 
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
            </div>
        </div>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>fast</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll', marginBottom: 100}}> 
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
                <RestaurantCard goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors}/>
            </div>
        </div>
        </div>
        </>)
    }
}

export default HomePage;