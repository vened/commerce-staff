import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { userCreateSession } from '../../redux/actions/UserActions'

import {AppBar, LeftNav, MenuItem, IconButton, RaisedButton} from 'material-ui'
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu'

export class Dashboard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  static propTypes = {
    userCreateSession: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  login (e) {
    var { dispatch } = this.props
    dispatch(userCreateSession())
  }

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
        <RaisedButton primary label='Increment' onClick={this.login.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Dashboard)
