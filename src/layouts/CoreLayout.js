import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';

import {AppBar, LeftNav, MenuItem, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import '../styles/core.scss';

export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    navGo (url) {
        //event.preventDefault();
        console.log(`go ${url}`)
        this.props.dispatch(routeActions.push(url));
    }

    render () {
        let sidebarItems = [
            { name: 'Категории', url: '' },
            { name: 'Администраторы', url: 'admins' }
        ];

        let leftNavWidth = 200;
        let appBarHeight = 64;

        let leftNavStyle = {
            zIndex: 1000,
            paddingTop: appBarHeight,
            width: leftNavWidth
        };

        let contentContainerStyle = {
            paddingLeft: leftNavWidth + 10,
            paddingTop: appBarHeight
        };

        let AppBarStyle = {
            position: 'fixed'
        };

        return (
            <div className='CoreLayout'>
                <AppBar
                    title='Staff'
                    zDepth={1}
                    style={AppBarStyle}
                    showMenuIconButton={false}
                    iconElementLeft={<IconButton onTouchTap={this.handleToggle}><LeftNavToggle /></IconButton>}
                />
                <LeftNav docked
                         style={leftNavStyle}
                         open={this.state.open}
                         onRequestChange={open => this.setState({open})}
                >
                    {
                        sidebarItems.map((item, ix) => {
                            return (
                                <MenuItem
                                    key={ix}
                                    onTouchTap={this.navGo.bind(this, item.url)}
                                >
                                    {item.name}
                                </MenuItem>
                            )
                        }, this)
                    }
                </LeftNav>
                <div style={contentContainerStyle} className='CoreLayoutContentContainer'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CoreLayout.propTypes = {
    children: PropTypes.element
};


function mapStateToProps (state) {
    return {
        email: state.session.email,
    };
}
export default connect(mapStateToProps)(CoreLayout);
