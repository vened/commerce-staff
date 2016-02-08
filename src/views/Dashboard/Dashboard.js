import React from 'react'
import {AppBar, LeftNav, MenuItem, IconButton, RaisedButton} from 'material-ui'
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu'

export default class Dashboard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    return (
      <div>
        <AppBar
          title='Staff'
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><LeftNavToggle /></IconButton>}
        />
        <LeftNav docked={false}
                 width={200}
                 open={this.state.open}
                 onRequestChange={open => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
        <RaisedButton primary label='Increment'/>
      </div>
    )
  }
}
