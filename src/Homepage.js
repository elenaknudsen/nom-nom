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
        let cheapEats = [];
        let iconicChapelHillSpots = [];
        let localFavorites = [];
        this.props.data.restaurants.map(element => {
            if(element.name==='GRK Yeero') cheapEats.push(element)
            if(element.name==='Hibachi and Company') cheapEats.push(element)
            if(element.name==='Buns') cheapEats.push(element)
            if(element.name==="McDonald's") cheapEats.push(element)
            if(element.name==='Italian Pizzeria III') cheapEats.push(element)
            if(element.name==="Papa John's") cheapEats.push(element)
            if(element.name==='Time-Out Restaurant') cheapEats.push(element)
            if(element.name==='Insomnia Cookies') cheapEats.push(element)
            if(element.name==='Kurama Sushi and Noodle Express') cheapEats.push(element)

            if(element.name==='Four Corners') iconicChapelHillSpots.push(element)
            if(element.name==="Sutton's Drug Store") iconicChapelHillSpots.push(element)
            if(element.name==='Goodfellows') iconicChapelHillSpots.push(element)
            if(element.name==='Sup Dogs') iconicChapelHillSpots.push(element)
            if(element.name==='Carolina Coffee Shop') iconicChapelHillSpots.push(element)
            if(element.name==='Top of the Hill') iconicChapelHillSpots.push(element)
            if(element.name==='Carolina Brewery') iconicChapelHillSpots.push(element)
            if(element.name==="Al's Burger Shack") iconicChapelHillSpots.push(element)
            if(element.name==="The Blue Horn Lounge") iconicChapelHillSpots.push(element)

            if(element.name==="Linda's") localFavorites.push(element)
            if(element.name==='Epilogue') localFavorites.push(element)
            if(element.name==='Mediterranean Deli') localFavorites.push(element)
            if(element.name==="Tallulah's") localFavorites.push(element)
            if(element.name==="Brandwein's Bagels") localFavorites.push(element)
            if(element.name==='Pirate Captain') localFavorites.push(element)
            if(element.name==="Tonya's Cookies") localFavorites.push(element)         
        })
        return(<>
        <div style={{  width: window.innerWidth, overflowY: 'scroll', overflowX: 'hidden'}}>
        <Typography style={{ fontSize: '16px', color: 'white', textAlign: 'left', marginTop: 20, marginLeft: 40, marginRight: 35}}>Experience Franklin Street from Bonchon to Franklin Motors!</Typography>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <img alt="map of franklin street" src={Map}style={{width:300, marginTop: 10, marginLeft: 'auto', marginRight: 'auto'}}></img>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>cheap eats</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', marginRight: 25}}> 
                {cheapEats.map(element => this.generateCards(element))}
            </div>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%'}}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>iconic chapel hill spots</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', marginRight: 25}}> 
            {iconicChapelHillSpots.map(element => this.generateCards(element))}

            </div>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>
            <Typography style={{marginLeft: 25, fontSize: '24px', padding: 10, color: 'white'}}>local favorites</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', marginRight: 25, marginBottom: 20}}> 
            {localFavorites.map(element => this.generateCards(element))}
            </div>
        </div>
        </div>
        </>)
    }
}

export default HomePage;