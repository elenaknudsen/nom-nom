import React from 'react';
import Typography from '@mui/material/Typography';


import RestaurantCard from './RestaurantCard.js';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.generateCards = this.generateCards.bind(this)
      }

      generateCards(element){
          //console.log(element.name)
          return (<RestaurantCard data={element} goToRestaurantPage={this.props.goToRestaurantPage} colors={this.props.colors} />)
        }
    render () {
        return(<>

        <div style={{  width: window.innerWidth, overflowY: 'scroll', overflowX: 'hidden'}}>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>cheap eats</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll'}}> 
                {this.props.data.restaurants.map(element => this.generateCards(element))}
            </div>
        </div>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%'}}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>chapel hill classics</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll'}}> 
            {this.props.data.restaurants.map(element => this.generateCards(element))}

            </div>
        </div>
        <div style={{ textAlign: 'left', width:'100%', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>fast</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', width: 1600, overflowX: 'scroll', marginBottom: 100}}> 
            {this.props.data.restaurants.map(element => this.generateCards(element))}
            </div>
        </div>
        </div>
        </>)
    }
}

export default HomePage;