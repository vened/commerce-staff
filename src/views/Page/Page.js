import React, {PropTypes} from 'react'

import {AppBar, LeftNav, MenuItem, IconButton} from 'material-ui'
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu'

export class Page extends React.Component {

  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  static propTypes = {
    session: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired
  };

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

        <h1>page</h1>

      </div>
    )
  }
}

export default Page
