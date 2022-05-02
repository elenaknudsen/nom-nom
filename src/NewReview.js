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
import writeReview from './Review';
import ClickableChip from './ClickableChip';
import firebase from './firebase/index';
import 'firebase/compat/firestore';
let reviewCounter = 1;

//colors
let BACKGROUND = '#273140';
let CAROLINA_BLUE = '#4B9CD3';
let ACCENT = '#2B4F82';
let GOLDENISH = '#F4AC45';
let colors = { BACKGROUND, CAROLINA_BLUE, ACCENT, GOLDENISH }




class NewReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      reviewValue: "",
      restaurant: "",
      id: reviewCounter++,
      wait: 0,
      spend: 0,
      vibes: [],

    };
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleReview = this.handleReview.bind(this)
    this.handleRestaurant = this.handleRestaurant.bind(this)
    this.handleStar = this.handleStar.bind(this)
    this.handleWait = this.handleWait.bind(this)
    this.handleSpend = this.handleSpend.bind(this)
    this.handleVibes = this.handleVibes.bind(this)
  }
  handleStar(number) {
    this.setState({
      stars: number
    })

  }
  handleWait(number) {
    this.setState({
      wait: number
    })
  }
  handleSpend(number) {
    this.setState({
      spend: number
    })

  }
  handleVibes(event) {
    this.setState(state => {
      const vibes = state.vibes.concat(event.target.label);
      return {
        vibes
      }
    })
  }
  handleRestaurant() {
    this.setState({
      restaurant: this.data.name
    })
  }
  // This is the function that sends the data from the page to make a new review!!
  // setReviewLine() {
  //   this.setState({
  //     reviewLine: [
  //       ...this.state.reviewLine,
  //       { reviewID: reviewCounter++, restaurant: this.state.restaurant, text: this.state.reviewValue, stars: this.state.stars }],
  //     reviewValue: "",
  //   });
  // }
  // submitReviewLine(event) {
  //   event.preventDefault();
  //   this.setReviewLine();
  // }
  writeReview(id, content, stars, wait, spend, vibes) {
    console.log(firebase.db)
    const reviewData = {
      restaurant: this.handleRestaurant(),
      reviewID: id,
      text: content,
      stars: stars,
      wait: wait,
      spend: spend,
      vibes: vibes,
    };
    const sendReview = () => {
      firebase.db.collection('review').add({ restaurant: reviewData.restaurant, id: reviewData.id, content: reviewData.text, stars: reviewData.stars, wait: reviewData.wait, spend: reviewData.spend, vibes: reviewData.vibes }).then(documentReference => {
        console.log('document reference id ', documentReference.id)
      }).catch(error => { console.log(error.message) })
    }

    sendReview();
  }
  // enterReviewLine(event) {
  //   // edge case fi on computer and you hit enter after typing in the review box
  //   if (event.charCode === 13) {
  //     this.setReviewLine();
  //   }
  // }
  handleSubmit(event) {
    event.preventDefault()
    writeReview(this.state.restaurant, this.state.id, this.state.reviewValue, this.state.stars, this.state.spend, this.state.wait, this.state.vibes)

  }
  handleClick() {
    console.log(this.props.data)
    this.props.goToRestaurantPage(this.props.data);
  }


  render() {
    console.log(this.event.data.name)
    return (<>
      <Paper style={{ width: 300, height: window.innerHeight, backgroundColor: colors.CAROLINA_BLUE, margin: 25, marginBottom: 10, padding: 30, display: 'flex', flexDirection: 'column', overflow: 'scroll' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <IconButton onClick={() => this.handleStar(1)}>{this.state.stars === 0 ? <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><StarOutline fontSize="large" /></Icon> : <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><Star fontSize="large" /></Icon>}</IconButton>
          <IconButton onClick={() => this.handleStar(2)}>{this.state.stars <= 1 ? <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><StarOutline fontSize="large" /></Icon> : <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><Star fontSize="large" /></Icon>}</IconButton>
          <IconButton onClick={() => this.handleStar(3)}>{this.state.stars <= 2 ? <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><StarOutline fontSize="large" /></Icon> : <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><Star fontSize="large" /></Icon>}</IconButton>
          <IconButton onClick={() => this.handleStar(4)}>{this.state.stars <= 3 ? <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><StarOutline fontSize="large" /></Icon> : <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><Star fontSize="large" /></Icon>}</IconButton>
          <IconButton onClick={() => this.handleStar(5)}>{this.state.stars <= 4 ? <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><StarOutline fontSize="large" /></Icon> : <Icon style={{ color: colors.GOLDENISH, padding: 10 }}><Star fontSize="large" /></Icon>}</IconButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <Typography style={{ color: 'white' }} fontSize="16px">how long did you wait for food?</Typography>
          <FormControl style={{ width: 200, marginLeft: 20 }}>
            <Select style={{ backgroundColor: 'white' }}>
              <MenuItem value={10} onClick={() => this.handleWait(10)}>less than 10 minutes</MenuItem>
              <MenuItem value={20} onClick={() => this.handleWait(20)}>10-30 minutes</MenuItem>
              <MenuItem value={30} onClick={() => this.handleWait(30)}>more than 30 minutes</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <Typography style={{ color: 'white' }} fontSize="16px">how much did you spend?</Typography>
          <FormControl style={{ width: 200, marginLeft: 20 }}>
            <Select style={{ backgroundColor: 'white' }}>
              <MenuItem value={10} onClick={() => this.handleSpend(10)}>less than $10</MenuItem>
              <MenuItem value={20} onClick={() => this.handleSpend(20)}>$10-$20</MenuItem>
              <MenuItem value={30} onClick={() => this.handleSpend(30)}>more than $20 </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <Typography style={{ color: 'white' }} fontSize="28px">vibes:</Typography>
        </div>
        <div style={{ margin: 10 }}>
          <ClickableChip colors={colors} label="#study-grind" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#quirky" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#loud" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#quiet" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#date-night" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#bar" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#parent-approved" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#bargain" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#fancy" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#dive" onClick={() => this.handleVibes()} />
          <ClickableChip colors={colors} label="#game-night" onClick={() => this.handleVibes()} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
          <Typography fontSize="20px" style={{ marginLeft: 20, marginTop: 10, color: 'white' }}>title:</Typography>
          <FormControl variant="outlined"><OutlinedInput style={{ backgroundColor: 'white', marginLeft: 20 }} /></FormControl>
        </div>
        <Typography fontSize="20px" style={{ marginLeft: 30, marginTop: 10, color: 'white' }}>review:</Typography>
        {/* This shoudl hopefully load the review box */}
        <FormControl reviewValue={this.state.reviewValue} variant="outlined"><OutlinedInput style={{
          backgroundColor: 'white', marginLeft: 20
        }} /></FormControl>
        <div style={{ display: "grid", flexDirection: "row", margin: 20 }}>
          <Button variant="contained" style={{ backgroundColor: colors.ACCENT, display: "grid", gridColumn: "1/2" }} onClick={this.handleClick}>Cancel</Button>
          <Button variant="contained" style={{ backgroundColor: colors.ACCENT, display: "grid", gridColumn: "4/5" }} onClick={this.writeReview}>Submit</Button>
        </div>
        {/* Saved html: is in the review box compoent */}

      </Paper>
    </>)
  }
}

export default NewReview;