import React from 'react';
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import StarOutline from '@mui/icons-material/StarOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import Review from './Review';
import ClickableChip from './ClickableChip';

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
      this.state = {

      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.props.goToReviewPage();
      }
    render () {
        return(<>
        <Paper style={{backgroundColor: this.props.colors.CAROLINA_BLUE, margin: 25, padding: 30, overflow: 'scroll'}}>
        <div class="row" style={{display: 'flex', flexDirection: 'row'}}>
            <Paper style={{ backgroudColor: 'white', height: 160, width: 160}}/>
            <Paper style={{ backgroudColor: 'white', height: 160, width: 160}}/>
            <Paper style={{ backgroudColor: 'white', height: 160, width: 160}}/>
        </div>
        <div class="row" style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <div class="column" style={{float: 'left'}}>
        <Typography fontSize="36px">restaurant</Typography>
        </div>
        <div class="column" style={{float: 'right', alignContent: 'right', textAlign: 'right'}}>
        <Typography fontSize="28px">$$$</Typography>
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Typography fontSize="28px">open 10am-8pm</Typography>
        <Typography fontSize="28px">not too busy</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <ClickableChip colors={this.props.colors} label="website"/>
        <ClickableChip colors={this.props.colors} label="menu"/>
        <ClickableChip colors={this.props.colors} label="directions"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="28px">vibes:</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <ClickableChip colors={this.props.colors} label="#studygrind"/>
        <ClickableChip colors={this.props.colors} label="#quirky"/>
        <ClickableChip colors={this.props.colors} label="#cozy"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="28px">leave a review:</Typography>
        <List>
            <ListItemButton onClick={this.handleClick}>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
        <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
        <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
        <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
        <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
            </ListItemButton>
        </List>
        
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="28px">reviews:</Typography>
        <FormControl style={{width: 200}}>
        <InputLabel>filter by</InputLabel>
        <Select>
          <MenuItem value={10}>upvotes</MenuItem>
          <MenuItem value={20}>recent</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', margin: 10, overflow: 'scroll', gap: 10}}>
            <Review colors={this.props.colors}></Review>
            <Review colors={this.props.colors}></Review>
            <Review colors={this.props.colors}></Review>
            <Review colors={this.props.colors}></Review>
        </div>

        </Paper>
        </>)
    }
}

export default RestaurantPage;