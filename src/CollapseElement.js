import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import ClickableChip from './ClickableChip';

class CollapseElement extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        open: false,
      };
      this.handleClick = this.handleClick.bind(this);
      this.generateCheckboxes = this.generateCheckboxes.bind(this);
      }

        handleClick(event) {
            this.setState({
                open: !this.state.open
            })
        }

        generateCheckboxes(element){
            if(this.props.title==='vibes') {
                return (<ClickableChip colors={this.props.colors} label={element} />)
            }else {
            return (<ListItem sx={{ pl: 4 }}>
                <Checkbox checked={this.props.clearFilters}></Checkbox>
                <ListItemText>{element}</ListItemText>
            </ListItem>)
            }
            
        }
    render () {
        return(<>
            <ListItemButton onClick={this.handleClick}>
                <ListItemText>{this.props.title}</ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open} >
                <List>
                {this.props.options.map(element => this.generateCheckboxes(element))}
                </List>
            </Collapse>
        </>)
    }
}

export default CollapseElement;