import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Result from './Result.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        selectValue: 10
      };
      this.handleClick = this.handleClick.bind(this);
      this.getRestaurants = this.getRestaurants.bind(this);
      this.handleChange = this.handleChange.bind(this)
      }

      handleClick(event) {
          this.props.data.restaurants.forEach( element => {
              if (element.name===event) {
                this.props.goToRestaurantPage(element);

              }
          })
      }
      handleChange(event) {
          this.setState({
              selectValue: event.target.value
          })
      }
      getRestaurants(element) {
          return(<ListItemButton style={{padding: 0 }}onClick={()=>this.handleClick(element.name)}>
            <Result data={element} colors={this.props.colors} />
        </ListItemButton>)
      }
    render () {
        return(<div style={{ width: window.innerWidth, overflowY: 'scroll', overflowX: 'hidden',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ display: "grid", marginTop: 20, marginLeft:10, width: 300}}>
                <Typography style={{color: 'white', fontSize: '20px', display: "grid", gridColumn: "1/3", marginTop: 15 }}>{this.props.data.restaurants.length} results found</Typography>
                <FormControl style={{width: '80%', borderColor: 'white', display: "grid", gridColumn: "5/6", width: 150 }}>
                    <InputLabel style={{color: 'white'}}>sort by</InputLabel>
                    <Select 
                    label="sort by"
                    value={this.state.selectValue}
                    onChange={this.handleChange}
                    style={{borderColor: 'white', color: 'white'}}>
                    <MenuItem value={10}>top rated</MenuItem>
                    <MenuItem value={20}>$-$$$</MenuItem>
                    <MenuItem value={30}>$$$-$</MenuItem>
                    <MenuItem value={40}>A-Z</MenuItem>
                    </Select>
                </FormControl>
                </div>
                    <List style={{width: 350, display: 'flex', flexDirection: 'column', height: '100%',  overflow: 'auto', willChange: 'transform'}}>
                        {this.props.data.restaurants.map(element => this.getRestaurants(element))}
                    </List>
        </div>)
    }
}

export default SearchResults;