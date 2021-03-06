import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';

class Result extends React.Component {
    render () {
        return(<Paper style={{ backgroundColor: this.props.colors.CAROLINA_BLUE, padding: 10,  width: '90%', height: 190, margin: 10}} >
         <Typography style={{textAlign: 'center', marginBottom: 10, fontWeight: 'bold', color: 'white'}} fontSize="22px">{this.props.data.name}</Typography>
         <div class="row">
            <div class="column" style={{float: 'left', width: 140, marginRight: 10}}>
            <img alt={this.props.data.name} src={this.props.data.image} style={{width: 140, height: 130}}></img>
            </div>
            <div style={{}}>
                <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon>
                {this.props.data.rating>=2 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.data.rating>=3 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.data.rating>=4 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>}
                {this.props.data.rating>=5 ? <Icon style={{color: this.props.colors.GOLDENISH}}><Star fontSize="small"/></Icon> : <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="small"/></Icon>} 
            </div> 
            <div class="column" style={{marginTop: 10}}>
                {this.props.data.cuisine.map(element => <Typography style={{color: 'white'}} fontSize="14px" >{element}</Typography> )}
            </div>          
        </div>
        
        </Paper>)
    }
}

export default Result;