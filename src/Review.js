import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import StarHalf from '@mui/icons-material/StarHalf';

class Review extends React.Component {
    render () {
        return(<Paper style={{padding: 20}}>
            <Typography fontSize="24px">title</Typography>
            <div class="row">
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarHalf fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
            </div>
            <Typography fontSize="16px">asfdkajh kjhfajsdkfhkajhdkfhasjkhfkjashdf</Typography>
        </Paper>)
    }
}

export default Review;