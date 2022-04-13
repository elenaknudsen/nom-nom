import React from 'react';
import Typography from '@mui/material/Typography';


import RestaurantCard from './RestaurantCard.js';
import Map from './map.png';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.generateCards = this.generateCards.bind(this)
      }

      generateCards(element){
          return (<RestaurantCard data={element} goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors} />)
        }
    render () {
        return(<>
        <div style={{  width: window.innerWidth, overflowY: 'scroll', overflowX: 'hidden'}}>
        <Typography style={{ fontSize: '24px', color: 'white', textAlign: 'center', marginTop: 20}}>experience franklin street from bonchon to franklin motors!</Typography>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <img alt="map of franklin street" src={Map}style={{width:300, marginTop: 30, marginLeft: 'auto', marginRight: 'auto'}}></img>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>cheap eats</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll'}}> 
                {this.props.data.restaurants.map(element => this.generateCards(element))}
            </div>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%'}}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>chapel hill classics</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll'}}> 
            {this.props.data.restaurants.map(element => this.generateCards(element))}

            </div>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>local favorites</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', marginBottom: 100}}> 
            {this.props.data.restaurants.map(element => this.generateCards(element))}
            </div>
        </div>
        </div>
        </>)
    }
}

export default HomePage;