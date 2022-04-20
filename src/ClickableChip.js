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
        <Chip variant="filled" label={this.props.label} onClick={this.handleClick} style={{color: 'white', margin: 5, backgroundColor: this.state.selected ? this.props.colors.ACCENT : '#00000014'}}/>
                )
    }
}

export default ClickableChip;