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
        <Paper style={{width: 300, backgroundColor: this.props.colors.CAROLINA_BLUE, margin: 25, padding: 20, overflow: 'scroll'}}>
        <div class="row" style={{display: 'flex', flexDirection: 'row'}}>
            <Paper style={{ backgroudColor: 'white', height: 100, width: 100}}/>
            <Paper style={{ backgroudColor: 'white', height: 100, width: 100}}/>
            <Paper style={{ backgroudColor: 'white', height: 100, width: 100}}/>
        </div>
        <div style={{ display: "grid", marginLeft:10, marginTop:10 }}>
        <Typography fontSize="32px" style={{ display: "grid", gridColumn: "1/3" }}>restaurant</Typography>
        <Typography fontSize="24px" style={{ display: "grid", gridColumn: "4/5", marginTop: 7 }}>$$$</Typography>
        </div>
        <div style={{ display: "grid", marginLeft: 10 }}>
        <Typography fontSize="16px" style={{ display: "grid", gridColumn: "1/3" }}>open 10am-8pm</Typography>
        <Typography fontSize="16px" style={{ display: "grid", gridColumn: "5/6" }}>not too busy</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <ClickableChip colors={this.props.colors} label="website"/>
        <ClickableChip colors={this.props.colors} label="menu"/>
        <ClickableChip colors={this.props.colors} label="directions"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="32px">vibes:</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <ClickableChip colors={this.props.colors} label="#studygrind"/>
        <ClickableChip colors={this.props.colors} label="#quirky"/>
        <ClickableChip colors={this.props.colors} label="#cozy"/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
        <Typography fontSize="16px" style={{marginTop: 15}}>leave a review:</Typography>
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
        <Typography fontSize="16px" style={{marginTop: 15}}>reviews:</Typography>
        <FormControl style={{width: 200, marginLeft: 20}}>
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