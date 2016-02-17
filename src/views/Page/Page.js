import React, {PropTypes} from 'react';
import {AppBar, LeftNav, MenuItem, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';

import { connect } from 'react-redux';
import { userGetList } from '../../redux/actions/UserActions';

export class Page extends React.Component {

    constructor (props) {
        super(props);
        this.state = { open: false };
    }

    componentWillMount () {
        this.getUsers();
    }

    getUsers () {
        this.props.dispatch(userGetList())
    }


    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

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
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };
}

function mapStateToProps (state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(Page);
