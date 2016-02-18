import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import urls from '../helpers/urls';

import Sidebar from '../components/Sidebar/Sidebar';
import {AppBar, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import '../styles/core.scss';

export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: 'Staff'
        };
    }

    render () {
        let leftNavWidth = 240;
        let appBarHeight = 64;

        let contentContainerStyle = {
            paddingLeft: leftNavWidth + 10,
            paddingTop: appBarHeight + 10
        };

        let AppBarStyle = {
            position: 'fixed'
        };

        return (
            <div className='CoreLayout'>
                <AppBar
                    title={this.state.title}
                    zDepth={1}
                    style={AppBarStyle}
                    showMenuIconButton={false}
                    iconElementLeft={<IconButton onTouchTap={this.handleToggle}><LeftNavToggle /></IconButton>}
                />
                <Sidebar
                    leftNavWidth={leftNavWidth}
                    appBarHeight={appBarHeight}
                />
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
