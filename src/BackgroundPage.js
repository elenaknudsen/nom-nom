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
        homepage: true,
      };
      this.onSearchClick = this.onSearchClick.bind(this);
      }

    onSearchClick(event) {
        this.setState({
            homepage: false
        })
        console.log(this.state.homepage)
    }
    render () {
        return(<>
         <Navbar colors={this.props.colors} onSearchClick={this.onSearchClick}/>
         {this.state.homepage ? <Homepage colors={this.props.colors}/> : <NewReview colors={this.props.colors}/>}
        </>)
    }
}

export default BackgroundPage;