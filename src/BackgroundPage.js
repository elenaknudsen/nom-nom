import React from 'react';

import Homepage from './Homepage';
import Navbar from './Navbar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';
import RestaurantPage from './RestaurantPage';
import NewReview from './NewReview';
import BottomNavbar from './BottomNavbar';

const testData = require('./TestData.json');

const data = require('./Data.json')
    

class BackgroundPage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        restaurantInfo: null,
        page: 'homepage',
        prevPage: []
      };
      this.onSearchClick = this.onSearchClick.bind(this);
      this.onBackButton = this.onBackButton.bind(this);
      this.goToRestaurantPage = this.goToRestaurantPage.bind(this);
      this.goToReviewPage = this.goToReviewPage.bind(this);
      this.goToSearchResults = this.goToSearchResults.bind(this);
      this.goToHomepage = this.goToHomepage.bind(this);
      }
      

      renderSwitch(page) {
        switch(page) {
          case 'homepage':
            return (<Homepage data={data} goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'searchFilters':
            return (<SearchFilters goToSearchResults={this.goToSearchResults} colors={this.props.colors} />);
          case 'searchResults':
            return (<SearchResults data={data} goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'restaurantPage':
            return (<RestaurantPage data={this.state.restaurantInfo} goToReviewPage={this.goToReviewPage} colors={this.props.colors} />);
          case 'newReview': 
            return (<NewReview data={this.state.restaurantInfo} goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          default:
            return (<Homepage data={data} colors={this.props.colors} />);
        }
      }

    onSearchClick(event) {
        let temp = this.state.prevPage;
        temp.push(this.state.page)
            this.setState({
                page: 'searchFilters',
                prevPage: temp
            })
    }

    goToRestaurantPage(event) {
        let temp = this.state.prevPage;
        if (this.state.page==='newReview') {
        } else {
            temp.push(this.state.page)
        }
        this.setState({
            restaurantInfo: event,
            page: 'restaurantPage',
            prevPage: temp
        })
    }
    goToSearchResults(event) {
        let temp = this.state.prevPage;
        temp.push(this.state.page)
        this.setState({
            page: 'searchResults',
            prevPage: temp
        })
    }
    goToReviewPage(event) {
        this.setState({
            page: 'newReview',
        })
    }
    goToHomepage(event) {
        let temp = this.state.prevPage;
        if(this.state.page==='homepage') {
        } else {
        temp.push(this.state.page)
        this.setState({
            page: 'homepage',
            prevPage: temp

        })
    }
    }

    onBackButton(event) {
        let temp = this.state.prevPage;
        let currPage = temp.pop();
        if(temp.length===0) {
            this.setState({
                page: 'homepage',
                prevPage: temp
            })
        } else {
            this.setState({
                page: currPage,
                prevPage: temp
            })
        }
    }
    render () {
        return(<>
         <Navbar colors={this.props.colors} prevPage={this.state.prevPage} currentPage={this.state.page} onBackButton={this.onBackButton} onSearchClick={this.onSearchClick}/>
         {this.renderSwitch(this.state.page)}
         <BottomNavbar colors={this.props.colors} prevPage={this.state.prevPage} currentPage={this.state.page} goToHomepage={this.goToHomepage} onSearchClick={this.onSearchClick}/>

        </>)
    }
}

export default BackgroundPage;