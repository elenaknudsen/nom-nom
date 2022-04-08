import React from 'react';

import Homepage from './Homepage';
import Navbar from './Navbar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';
import RestaurantPage from './RestaurantPage';
import NewReview from './NewReview';

let testData = {
    "restaurants": [
        {"name": "BEANS",
            "cuisine": "american",
            "hours": "12am-12pm",
            "price": "$",
            "dietRange": ["vegan", "vegetarian"],
            "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
            "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
            "rating": 5,
            "sitTime": "30 mins",
            "foodTime": "10 mins",
            "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
            "reviews": {
            "yummy": {
                "stars": 4,
                "comment": "yuum. yummy yum."
            },
            "it's alright I guess....": {
                "stars": "3",
                "comment": "this was really mediocre"
            }
            }},
            {"name": "restaurant",
                "cuisine": "japanese",
                "hours": "5pm-8pm",
                "price": "$$$",
                "dietRange": ["none"],
                "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                "rating": 5,
                "sitTime": "20 min",
                "foodTime": "10 min",
                "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
                "reviews": {
                "my review": {
                    "stars": 4,
                    "comment": "this was so good o,g"
                },
                "guess I need a title": {
                    "stars": 5,
                    "comment": "great sushi!! i loved it"
                }
                }},
                {"name": "name",
                    "cuisine": "italian",
                    "hours": "6pm-11pm",
                    "price": "$$",
                    "dietRange": ["vegan", "vegetarian", "gluten-free"],
                    "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                    "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                    "rating": 4,
                    "sitTime": "10 mins",
                    "foodTime": "20 mins",
                    "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
                    "reviews": {
                    "worth the wait": {
                        "stars": 5,
                        "comment": "I just love pasta, man"
                    },
                    "overrated": {
                        "stars": 1,
                        "comment": "boring. Not my style"
                    }
                    }},
                    {"name": "food place",
                        "cuisine": "mexican",
                        "hours": "11am-11pm",
                        "price": "$",
                        "dietRange": ["vegetarian", "gluten-free"],
                        "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                        "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                        "rating": 4,
                        "sitTime": "20 mins",
                        "foodTime": "5 mins",
                        "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
                        "reviews": {
                        "reviewTitle": {
                            "stars": 1,
                            "comment": "they forgot my order :/"
                        },
                        "amazing": {
                            "stars": 5,
                            "comment": "this margarita is to die for"
                        }
                        }},
                        {"name": "random",
                            "cuisine": "american",
                            "hours": "11am-8pm",
                            "price": "$$",
                            "dietRange": ["vegan", "vegetarian", "gluten-free"],
                            "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                            "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                            "rating": 3,
                            "sitTime": "0 mins",
                            "foodTime": "10 mins",
                            "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
                            "reviews": {
                            "boring": {
                                "stars": 3,
                                "comment": "nothing special here, spend your money somewhere else"
                            },
                            "clean and fresh": {
                                "stars": 5,
                                "comment": "the salad was to die for"
                            }
                            }},
                            {"name": "restaurant",
                                "cuisine": "indian",
                                "hours": "hours of operation",
                                "price": "$$$",
                                "dietRange": ["vegetarian"],
                                "website": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                                "directions": "https://docs.google.com/document/d/152At5sB1rsNbpS2KBFafgsPUj1yDm5yUgMbf1BtX0KM/edit",
                                "rating": 5,
                                "sitTime": "30 mins",
                                "foodTime": "20 mins",
                                "vibes": ["list", "of", "vibes", "associated", "with", "this", "restaurant", "from", "our", "users"],
                                "reviews": {
                                "expensive!!": {
                                    "stars": 5,
                                    "comment": "this was wayy to expensive, but the food was amazing"
                                },
                                "classic": {
                                    "stars": 5,
                                    "comment": "this is the best indian restuarant in the area"
                                }
                                }}
    ]
    
};
    

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
      }
      

      renderSwitch(page) {
        switch(page) {
          case 'homepage':
            return (<Homepage data={testData} goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'searchFilters':
            return (<SearchFilters goToSearchResults={this.goToSearchResults} colors={this.props.colors} />);
          case 'searchResults':
            return (<SearchResults data={testData} goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          case 'restaurantPage':
            return (<RestaurantPage data={this.state.restaurantInfo} goToReviewPage={this.goToReviewPage} colors={this.props.colors} />);
          case 'newReview': 
            return (<NewReview goToRestaurantPage={this.goToRestaurantPage} colors={this.props.colors} />);
          default:
            return (<Homepage data={testData} colors={this.props.colors} />);
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
        </>)
    }
}

export default BackgroundPage;