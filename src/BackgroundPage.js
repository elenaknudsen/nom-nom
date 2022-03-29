import React from "react";

import Homepage from "./Homepage";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import SearchFilters from "./SearchFilters";
import RestaurantPage from "./RestaurantPage";
import NewReview from "./NewReview";

class BackgroundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "homepage",
            prevPage: "homepage",
        };
        this.onSearchClick = this.onSearchClick.bind(this);
        this.goToRestaurantPage = this.goToRestaurantPage.bind(this);
        this.goToReviewPage = this.goToReviewPage.bind(this);
    }

    renderSwitch(page) {
        switch (page) {
            case "homepage":
                return ( <
                    Homepage goToRestaurantPage = { this.goToRestaurantPage }
                    colors = { this.props.colors }
                    />
                );
            case "searchFilters":
                return <SearchFilters colors = { this.props.colors }
                />;
            case "searchResults":
                return ( <
                    SearchResults goToRestaurantPage = { this.goToRestaurantPage }
                    colors = { this.props.colors }
                    />
                );
            case "restaurantPage":
                return ( <
                    RestaurantPage goToReviewPage = { this.goToReviewPage }
                    colors = { this.props.colors }
                    />
                );
            case "newReview":
                return ( <
                    NewReview goToRestaurantPage = { this.goToRestaurantPage }
                    colors = { this.props.colors }
                    />
                );
            default:
                return <Homepage colors = { this.props.colors }
                />;
        }
    }

    onSearchClick(event) {
        if (this.state.page === "searchFilters") {
            this.setState({
                page: "searchResults",
            });
        } else {
            this.setState({
                page: "searchFilters",
            });
        }
    }
    goToRestaurantPage(event) {
        this.setState({
            page: "restaurantPage",
        });
    }
    goToReviewPage(event) {
        this.setState({
            page: "newReview",
        });
    }
    render() {
        return ( <
            >
            <
            Navbar colors = { this.props.colors }
            onSearchClick = { this.onSearchClick }
            /> { this.renderSwitch(this.state.page) } <
            />
        );
    }
}

export default BackgroundPage;