import React from 'react';

import Homepage from './Homepage';
import Navbar from './Navbar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';
import RestaurantPage from './RestaurantPage';
import NewReview from './NewReview';

class BackgroundPage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        page: 'homepage',
        prevPage: []
      };
      this.onSearchClick = this.onSearchClick.bind(this);
      this.onBackButton = this.onBackButton.bind(this);
      this.goToRestaurantPage = this.goToRestaurantPage.bind(this);
      this.goToReviewPage = this.goToReviewPage.bind(this);
      }
      

      renderSwitch(page) {
        switch(page) {
          case 'homepage':
            return (<Homepage goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'searchFilters':
            return (<SearchFilters colors={this.props.colors} />);
          case 'searchResults':
            return (<SearchResults goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'restaurantPage':
            return (<RestaurantPage goToReviewPage={this.goToReviewPage} colors={this.props.colors} />);
          case 'newReview': 
            return (<NewReview goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          default:
            return (<Homepage colors={this.props.colors} />);
        }
      }

    onSearchClick(event) {
        let temp = this.state.prevPage;
        temp.push(this.state.page)
        if (this.state.page === 'searchFilters') {
            this.setState({
                page: 'searchResults',
                prevPage: temp
           })
        } else {
            this.setState({
                page: 'searchFilters',
                prevPage: temp
            })
        }
    }

    goToRestaurantPage(event) {
        let temp = this.state.prevPage;
        temp.push(this.state.page)
        this.setState({
            page: 'restaurantPage',
            prevPage: temp
        })
    }
    goToReviewPage(event) {
        let temp = this.state.prevPage;
        temp.push(this.state.page)
        this.setState({
            page: 'newReview',
            prevPage: temp
        })
    }

    onBackButton(event) {
        let temp = this.state.prevPage;
        temp.pop();
        console.log(temp)
        console.log(temp.length)
        this.setState({
            page: temp[temp.length-1],
            prevPage: temp
        })
    }
    render () {
        return(<>
         <Navbar colors={this.props.colors} prevPage={this.state.prevPage} currentPage={this.state.page} onBackButton={this.onBackButton} onSearchClick={this.onSearchClick}/>
         {this.renderSwitch(this.state.page)}
        </>)
    }
}

export default BackgroundPage;