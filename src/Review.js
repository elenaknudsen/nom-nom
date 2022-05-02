import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';

class Review extends React.Component {
    render () {
        return(<Paper style={{padding: 20}}>
            <Typography fontSize="24px">{this.props.title}</Typography>
            <div class="row">
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                {this.props.stars>=2 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.stars>=3 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.stars>=4 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.stars>=5 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
            </div>
            <Typography fontSize="16px">{this.props.content}</Typography>
        </Paper>)
    }
}

export default Review;