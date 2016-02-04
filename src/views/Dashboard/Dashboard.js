import React from 'react'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'

import {AppBar, LeftNav, MenuItem, IconButton} from 'material-ui'
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
// import DuckImage from './Duck.jpg'
// import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class Dashboard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    return (
      <div>
        <AppBar
          title="Title"
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
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(Dashboard)
