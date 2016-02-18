import React, { PropTypes } from 'react';
import {AppBar, LeftNav, MenuItem, IconButton, List, ListItem} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import '../styles/core.scss';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render () {

        let leftNavWidth = 200;
        let appBarHeight = 64;

        let leftNavStyle = {
            zIndex: 1000,
            paddingTop: appBarHeight,
            width: leftNavWidth
        }

        let contentContainerStyle = {
            paddingLeft: leftNavWidth + 10,
            paddingTop: appBarHeight
        }

        let AppBarStyle = {
            position: 'fixed'
        }

        return (
            <div className='CoreLayout'>
                <AppBar
                    title='Staff'
                    zDepth={1}
                    style={AppBarStyle}
                    showMenuIconButton={false}
                    iconElementLeft={<IconButton onTouchTap={this.handleToggle}><LeftNavToggle /></IconButton>}
                />
                <LeftNav docked={true}
                         style={leftNavStyle}
                         open={this.state.open}
                         onRequestChange={open => this.setState({open})}
                >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
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

export default CoreLayout;
