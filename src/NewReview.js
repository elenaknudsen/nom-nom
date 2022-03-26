import React from 'react';
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import StarOutline from '@mui/icons-material/StarOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class NewReview extends React.Component {
    render () {
        return(<>
            <Paper style={{backgroundColor: this.props.colors.CAROLINA_BLUE, margin: 25, padding: 30}}>
            <div class="row" style={{display: 'flex', flexDirection: 'row'}}>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="large"/></Icon>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="large"/></Icon>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="large"/></Icon>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="large"/></Icon>
            <Icon style={{color: this.props.colors.GOLDENISH}}><StarOutline fontSize="large"/></Icon>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">how long did you wait for food?</Typography>
            <FormControl style={{width: 200}}>
            <Select>
              <MenuItem value={10}>less than 10 minutes</MenuItem>
              <MenuItem value={20}>10-30 minutes</MenuItem>
              <MenuItem value={30}>more than 30 minutes</MenuItem>
            </Select>
          </FormControl>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">how much did you spend?</Typography>
            <FormControl style={{width: 200}}>
            <Select>
              <MenuItem value={10}>less than $10</MenuItem>
              <MenuItem value={20}>$10-$20</MenuItem>
              <MenuItem value={30}>more than $20 </MenuItem>
            </Select>
          </FormControl>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">vibes:</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Chip label="#studygrind"/>
            <Chip label="#quirky"/>
            <Chip label="#cozy"/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">leave a review:</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">title:</Typography>
            <TextField></TextField>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Typography fontSize="28px">review:</Typography>
            <TextField></TextField>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: 10}}>
            <Button variant="contained" style={{backgroundColor: this.props.colors.GREENISH}}>cancel</Button>
            <Button variant="contained" style={{backgroundColor: this.props.colors.GREENISH}}>submit</Button>
            </div>
    
            </Paper>
            </>)
    }
}

export default NewReview;