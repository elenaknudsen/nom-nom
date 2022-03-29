import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import StarHalf from '@mui/icons-material/StarHalf';

class Result extends React.Component {
    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, padding: 10,  width: 750, height: 250, margin: 10}} >
         <div class="row">
            <div class="column" style={{float: 'left', width: 200,}}>
            <Paper style={{ backgroudColor: 'white', height: 160, marginBottom: 25}}></Paper>
            </div>
            <div class="column" style={{marginTop: 50}}>
                <Typography fontSize="32px" style={{marginLeft: 250}}>restaurant</Typography>
                <Typography fontSize="24px" style={{marginLeft: 250}}>cuisine</Typography>
                <Icon style={{color: this.props.colors.GOLDENISH, marginLeft: 50}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarHalf fontSize="small"/></Icon>
                <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>
            
            </div>
        </div>
        
        </Paper>)
    }
}

export default Result;