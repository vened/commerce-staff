import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { userCreateSession } from '../../redux/actions/UserActions'

import {AppBar, LeftNav, MenuItem, IconButton, RaisedButton} from 'material-ui'
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu'

export class Dashboard extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      open: false,
      username: 'maxstbn@yandex.ru',
      password: 'qwerty123',
    };
  }

  static propTypes = {
    userCreateSession: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  login (e) {
    var { dispatch } = this.props
    dispatch(userCreateSession({
      username: this.state.username,
      password: this.state.password
    }))
  }

  handleChangeName (e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword (e) {
    this.setState({password: e.target.value});
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
          <MenuItem>
            <Link to='/page'>Go to 404 Page</Link>
          </MenuItem>
          <MenuItem>Menu Item 2</MenuItem>

        </LeftNav>

        <form>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChangeName.bind(this)}/>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)}/>
          <RaisedButton primary label='Increment' onClick={this.login.bind(this)}/>
        </form>
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
