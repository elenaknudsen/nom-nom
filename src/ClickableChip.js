import React from 'react';
import Chip from '@mui/material/Chip';

class ClickableChip extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        selected: false
      };
      this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
          this.setState({
            selected: !this.state.selected
          })
      }
    render () {
        return(
        <Chip variant="filled" label={this.props.label} onClick={this.handleClick} style={{color: 'white', backgroundColor: this.state.selected ? this.props.colors.GREENISH : '#00000014'}}/>
                )
    }
}

export default ClickableChip;