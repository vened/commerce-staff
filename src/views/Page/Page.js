import React, {PropTypes} from 'react';
import {AppBar, LeftNav, MenuItem, IconButton, List, ListItem} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import lodash from 'lodash';


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

                {this.renderUsers()}

            </div>
        );
    }

    renderUsers () {
        let users = this.props.users.list;

        if (users) {
            return (
                <List>
                    {
                        users.map((item, ix) => {
                            return (
                                <ListItem key={ix}
                                          primaryText={item.email}
                                />
                            )
                        }, this)
                    }
                </List>
            )
        } else {
            return null
        }
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired
    };
}

function mapStateToProps (state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(Page);
