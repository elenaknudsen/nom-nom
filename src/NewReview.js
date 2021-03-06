import React from 'react';
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import StarOutline from '@mui/icons-material/StarOutline';
import Star from '@mui/icons-material/Star';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import ClickableChip from './ClickableChip';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    stars: 0
  };
  this.handleClick = this.handleClick.bind(this)
  this.handleStar = this.handleStar.bind(this)
  }

  handleClick(event) {
    console.log(this.props.data)
      this.props.goToRestaurantPage(this.props.data);
  }
  handleStar(number) {
    this.setState({
      stars: number
    })
  }
    render () {
      console.log(this.props.data)
        return(<>
            <Paper style={{width: 300, height: window.innerHeight, backgroundColor: this.props.colors.CAROLINA_BLUE, margin: 25, marginBottom: 10, padding: 30, display: 'flex', flexDirection: 'column', overflow: 'scroll'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <IconButton onClick={() => this.handleStar(1)}>{this.state.stars===0 ? <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><StarOutline fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><Star fontSize="large"/></Icon>}</IconButton>
            <IconButton onClick={() => this.handleStar(2)}>{this.state.stars<=1 ? <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><StarOutline fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><Star fontSize="large"/></Icon>}</IconButton>
            <IconButton onClick={() => this.handleStar(3)}>{this.state.stars<=2 ? <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><StarOutline fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><Star fontSize="large"/></Icon>}</IconButton>
            <IconButton onClick={() => this.handleStar(4)}>{this.state.stars<=3 ? <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><StarOutline fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><Star fontSize="large"/></Icon>}</IconButton>
            <IconButton onClick={() => this.handleStar(5)}>{this.state.stars<=4 ? <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><StarOutline fontSize="large"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH, padding:10}}><Star fontSize="large"/></Icon>}</IconButton>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography style={{color: 'white'}} fontSize="16px">how long did you wait for food?</Typography>
            <FormControl style={{width: 200, marginLeft: 20}}>
            <Select style={{backgroundColor: 'white'}}>
              <MenuItem value={10}>less than 10 minutes</MenuItem>
              <MenuItem value={20}>10-30 minutes</MenuItem>
              <MenuItem value={30}>more than 30 minutes</MenuItem>
            </Select>
          </FormControl>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography style={{color: 'white'}} fontSize="16px">how much did you spend?</Typography>
            <FormControl style={{width: 200, marginLeft: 20}}>
            <Select style={{backgroundColor: 'white'}}>
              <MenuItem value={10}>less than $10</MenuItem>
              <MenuItem value={20}>$10-$20</MenuItem>
              <MenuItem value={30}>more than $20 </MenuItem>
            </Select>
          </FormControl>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography style={{color: 'white'}} fontSize="28px">vibes:</Typography>
            </div>
            <div style={{ margin: 10 }}>
            <ClickableChip colors={this.props.colors} label="#study-grind"/>
            <ClickableChip colors={this.props.colors} label="#quirky"/>
            <ClickableChip colors={this.props.colors} label="#loud"/>
            <ClickableChip colors={this.props.colors} label="#quiet"/>
            <ClickableChip colors={this.props.colors} label="#date-night"/>
            <ClickableChip colors={this.props.colors} label="#bar"/>
            <ClickableChip colors={this.props.colors} label="#parent-approved"/>
            <ClickableChip colors={this.props.colors} label="#bargain"/>
            <ClickableChip colors={this.props.colors} label="#fancy"/>
            <ClickableChip colors={this.props.colors} label="#dive"/>
            <ClickableChip colors={this.props.colors} label="#game-night"/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="20px" style={{marginLeft:20, marginTop: 10, color: 'white'}}>title:</Typography>
            <FormControl variant="outlined"><OutlinedInput style={{backgroundColor: 'white', marginLeft:20}} /></FormControl>
            </div>
            <Typography fontSize="20px" style={{marginLeft:30, marginTop: 10, color: 'white'}}>review:</Typography>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            {/* <TextField multiline={true} rows={4} style={{marginLeft: 20, width: 400}}></TextField> */}
            <FormControl variant="outlined"><OutlinedInput multiline={true} rows={4} style={{backgroundColor: 'white', marginLeft: 20, width: 250}} /></FormControl>
            </div>
            <div style={{ display: "grid", flexDirection: "row", margin: 20}}>
            <Button variant="contained" style={{backgroundColor: this.props.colors.ACCENT, display: "grid", gridColumn: "1/2" }} onClick={this.handleClick}>cancel</Button>
            <Button variant="contained" style={{backgroundColor: this.props.colors.ACCENT, display: "grid", gridColumn: "4/5" }} onClick={this.handleClick}>submit</Button>
            </div>
    
            </Paper>
            </>)
    }
}

export default NewReview;