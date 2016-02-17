import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {AppBar, LeftNav, MenuItem, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';

export class Dashboard extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            open: false
        };
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
                    <MenuItem>
                        <Link to='/page'>Go to 404 Page</Link>
                    </MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>

                </LeftNav>
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };
}

export default Dashboard;
